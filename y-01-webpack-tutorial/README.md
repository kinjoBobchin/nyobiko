# webpackのチュートリアル

## 参照サイト
<https://www.youtube.com/watch?v=JdGnYNtuEtE>


## 環境構築
1. nodeとnpmがインストールされているか確かめる

~~~
$ node -v
$ npm -v
~~~

2. npm の初期化をする

~~~
$ npm init
~~~

=> package.jsonが吐き出される

ここに基本情報が書いてある

3. webpackを使用するコマンド

~~~
$ npm i -D webpack
~~~

※既にグローバルでwebpackを使用しているので書く必要はない
※グローバルでインストールする場合

~~~
$ npm i -g webpack
~~~

4. webpackを使用を確認するコマンド

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

5. 使用したいバージョンを指定する場合

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

6. srcフォルダ、distフォルダ、を作成する
srcにあるファイルを吸い上げ => distフォルダに吐き出すイメージ

## Tips. VS Codeを使用している時に、非表示にしたいフォルダがあるときは・・・

ユーザー設定(cmd + ,) => 「files.exclude」で検索 => 編集

node_modules、.vscodeを追加すると、設定や変更をするたびに何かとうざくならない

7. 