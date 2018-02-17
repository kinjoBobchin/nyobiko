# webpackのチュートリアル(インストール、設定編)
![webpack](https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg "サンプル")

## やりたいこと
・webpackをQiitaとかで理解しようと努めたけど、わからなかった
・だけど便利なのは知っているから、わかりたい。

## このチュートリアルの所要時間
・約20分ぐらいだと思います。（まとめるのには2時間かかかってるけど）

## 最終目標
①ファイルを更新したら、勝手にファイルが更新されて、ブラウザも更新される
②ファイルをバンドル（まとめて）して、ビルドしたら、勝手にサーバーが立ち上がる
③書いたファイルを勝手にコンパイルされる（typescript、pug、saas等）
④プルリクが通ってマージされたら、勝手にherokuにデプロイされる（難易度高、webpackじゃないかもしれない）

## チュートリアル後の最終目標とのギャップ
・最終目標の①〜④まで達成はされない
・勝手に更新される仕組みがwatchモードなんだろうなと察することができる
・以外にもnpmを使うじゃないかと知れる（Qiitaとかはwebpack.config.jsの話が中心）

## このチュートリアルの範囲
・理解のためにwebpackを一から設定する（というか、npmから）
・watchモードでbundleさせてみる
・なんか知らないけど、node_modulesが勝手に作られるからVSCodeで非表示にする
・テスト、本番でコマンドを使い分ける
・treeコマンドでディレクトリ構造を見る

## 環境構築
### 0. webpack-tutorial(名前は適当でOKです)フォルダを作成する
~~~
$ cd webpack-tutorial/
~~~

### 1. nodeとnpmがインストールされているか確かめる

~~~
$ node -v
$ npm -v
~~~

### 2. npm の初期化をする

~~~
$ npm init
~~~

=> package.jsonが吐き出される

ここに基本情報が書いてある

### 3. webpackを使用するコマンド

~~~
$ npm i -D webpack
~~~

※既にグローバルでwebpackを使用しているので書く必要はない
※グローバルでインストールする場合

~~~
$ npm i -g webpack
~~~

### 4. webpackを使用を確認するコマンド

使用可能なwebpackのバージョンを確認出来る(現在の最新は"4.0.0-beta.1")
~~~
$ npm view webpack versions
~~~

jsonでも確認できる(使用用途不明)
~~~
$ npm view webpack versions --json
~~~

単数形では、今使用しているバージョンを確認できる
~~~
$ npm view webpack version
~~~

### 5. 使用したいバージョンを指定する場合

~~~
$ npm i -D webpack@3.11.0
~~~

のように、バージョン指定できる

実行後に、package.jsonのwebpackのバージョンが更新されているはず
~~~
  "devDependencies": {
    "webpack": "^3.11.0"
  }
~~~

### 6. srcフォルダ、distフォルダ、を作成する
srcにあるファイルを吸い上げ => distフォルダに吐き出すイメージ

## Tips. VS Codeを使用している時に、非表示にしたいフォルダがあるときは・・・

ユーザー設定(cmd + ,) => 「files.exclude」で検索 => 編集

node_modules、.vscodeを追加すると、設定や変更をするたびに何かとうざくならない

### 7. 試しに、webpackの動きを確かめてみる準備

srcで吸い上げ→バンドル→distに吐き出すのをwebpackを使ってやってみます

ファイル構成を下記のようにしました。

~~~
.
├── dist
├── src
│   └── app.js
└── webpack.config.js
~~~

※ node_modules、package-lock.json、package.jsonは関係ないので除外してます

app.jsに「console.log("hello,webpack");」
とだけ書いて保存してます


ツリーコマンドは下記のようにすると、確認できました
~~~
$ tree -I 'node_modules'
~~~

※ -I はnode_modulesを除外するために追加してます

ツリーコマンドは下記のサイトを参考にしました
<https://qiita.com/koshihikari/items/0906cd8e97b931714efe>

### 8. webpackの動きを確かめる

~~~
$ webpack ./src/app.js ./dist/app.bundle.js
~~~
コマンド解説
webpackコマンドで、「./src/app.js」にあるファイルを「./dist/app.bundle.js」のように、distフォルダにapp.bundle.jsとして吐き出す

↓

~~~
.
├── dist
│   └── app.bundle.js
├── src
│   └── app.js
└── webpack.config.js
~~~

app.bundle.jsは暗号みたいだが、ちゃんと最後の行あたりに,app.jsの中身がバンドルされて出力されている

~~~
(省略)
/***/ (function(module, exports) {

console.log("hello,webpack");

/***/ })
/******/ ]);
~~~

これでwebpackのhelloworld完了

### 9. minifyのコマンド

さっきのコマンドに -p をつけると、minifyされたファイルが出力されます(minifyが何かはわかってない)
~~~
$ webpack ./src/app.js ./dist/app.bundle.js -p
~~~

### 10. watchモードの使用

さらに、さっきのコマンドに --watch をつけると、watchモードで minifyされたファイルが出力されますminifyで、コードページを早くするそうです。<https://qiita.com/zaru/items/51ee8a5be22b75a42927>

これで、app.jsの中身を変更して保存すると、コマンドをうたなくても、app.bundle.jsの中身が変更されます(素晴らしい)
~~~
$ webpack ./src/app.js ./dist/app.bundle.js -p --watch
~~~

ターミナルがwatchモードから抜け出すには ctrl + Cで抜けれます

### 11. webpack.config.jsに書き出す

毎回、コマンドを打つのは大変だし、webpack同士のコンフリクト（衝突）にもつながるので
webpack.config.jsに書き出しましょう
~~~
//webpack.config.js

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    }
}
~~~
さっきのコマンドのコピペで大丈夫です

### 12. package.jsonにコマンドにwebpackの実行コマンドを書く

"scripts"にあるコマンドで、実行出来るように書き換える

~~~
//package.json
(省略)
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
(省略)
~~~
↓
~~~
//package.json
(省略)
"scripts": {
    "dev": "webpack -d --watch"
  },
(省略)
~~~

コマンドの解説
webpackを「-d」developモード、「watch」モードで実行する

### 13. npm run dev　でフィニッシュです

webpack.config.jsとpackage.jsonに書いた内容を実行するコマンド
~~~
$ npm run dev
~~~

「10 .watchモードの使用」で使ったコマンドと同様の結果が得られるようになりました。

~~~
$ webpack ./src/app.js ./dist/app.bundle.js -p --watch
~~~

### 14. prodモードも追加しておきましょう

~~~
//package.json
(省略)
"scripts": {
    "dev": "webpack -d --watch"
  },
(省略)
~~~
↓
~~~
//package.json
(省略)
"scripts": {
    "dev": "webpack -d --watch",
    "prod": "webpack -p"
  },
(省略)
~~~

# 感想
Qiitaとかでwebpackの解説をしているものとかあるが、この動画見ながら
webpackを一から設定していくほうがわかりやすいし、
思ったよりもnpmと、package.jsonを使うなと思った。
すべて下記の参照から行ったものです。
トマト嫌いらしいけど、いい人や。

## 参照サイト
<https://www.youtube.com/watch?v=JdGnYNtuEtE>
