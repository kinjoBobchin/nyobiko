# webpackのチュートリアル(HTML Webpack Plugin編)
![webpack](https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg "webpack")

## やりたいこと
・HTML Webpack Pluginを使用して、htmlをbundle(まとめる)

## このチュートリアルの所要時間
・約3分ぐらいだと思います。

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
・HTML Webpack Pluginを追加する

### 1. ファイルはそのまま使います（コピーしても、前回のファイルが読み込まれてはまった）

distにindex.htmlを追加。これにHTMLファイルをまとめていく寸法。

~~~
.
├── app.js
├── dist
│   ├── app.bundle.js
│   └── index.html
├── src
│   └── app.js
└── webpack.config.js
~~~

### 2. html-webpack-pluginをインストールする

~~~
$ npm i html-webpack-plugin --save-dev
~~~

すると、package.jsonに依存関係が追記されています

~~~
(省略)
  "devDependencies": {
    "html-webpack-plugin": "^2.30.1",
    "webpack": "^3.11.0"
  }
(省略)
~~~

githubのリンクはこちらにあります
<https://github.com/jantimon/html-webpack-plugin>

### 3. webpack.config.jsにrequireを記載する

~~~
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};
~~~

１、プラグインを追加するための、requireを追加
２、output先のpathを記載。__dirnameがないと、「The output directory as **absolute path**(required).」と言われて怒られる
３、plugins: [new HtmlWebpackPlugin()]を追記する

これで、
~~~
$ npm run dev
~~~

をうつと、index.htmlがwebpackによって生成されている

### 3. index.ejsを追加

src配下に、index.htmlの雛形となるindex.ejsを追加
~~~
.
├── dist
│   ├── app.bundle.js
│   └── index.html
├── src
│   ├── app.js
│   └── index.ejs
└── webpack.config.js
~~~

~~~
//index.ejs
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
      <p>index.ejsからきたよ！</p>
  </body>
</html>
~~~

~~~
$ npm run dev
~~~

をうつと、index.htmlがwebpackによって生成されている

# 感想
まず、最初に前回のフォルダごとコピーしてやろうと思ってすすめていたら
前回のフォルダにあるapp.jsを読み込んで、コピーしたファイルを読もうとしなかった。
npm initとか、npm cache clean --forceとか試したけどうまくいかなかった。。。。。

## 参照サイト
<https://www.youtube.com/watch?v=JdGnYNtuEtE>
