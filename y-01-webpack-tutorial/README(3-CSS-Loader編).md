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
・CSS loaderを使用して、loaderの導入を知ることができる

## このチュートリアルの範囲
・CSS Loaderを追加する  
ここにCSS-Loaderの使用方法が書いてあります  
<https://github.com/webpack-contrib/css-loader>

### 1. CSS-Loaderのインストール(ファイルはそのまま使います)

~~~
$ npm install css-loader --save-dev
~~~

すると、package.jsonにCSS-loaderが追加されているのが確認できます

~~~
//package.json
(省略)
  "devDependencies": {
    "css-loader": "^0.28.9",
    "html-webpack-plugin": "^2.30.1",
    "webpack": "^3.11.0"
  }
(省略)
~~~

### 2. srcフォルダ配下にapp.cssを作成する

ファイルの構成はこうなっています
~~~
.
├── dist
│   ├── app.bundle.js
│   └── index.html
├── src
│   ├── app.css
│   ├── app.js
│   └── index.ejs
└── webpack.config.js
~~~

README.md、node_modules、package.jsonは省いています

### 3. 


### 8. 終了



# 感想
まず、最初に前回のフォルダごとコピーしてやろうと思ってすすめていたら
前回のフォルダにあるapp.jsを読み込んで、コピーしたファイルを読もうとしなかった。
npm initとか、npm cache clean --forceとか試したけどうまくいかなかった。。。。
それと、はまったポイントは、outputのパスを指定するところです。
nodeの場合の相対パスの指定が、__dirnameをくっつけることなので、これを知っていたらハマらなかった。
あと、VSCodeでマークダウンを書くことで、空白を自動で取り除くのをマークダウンだけ除外するTips記しておきます。感謝。

### Tips. VSCodeでマークダウンだけ、自動で空白を取り除かない設定をする
<https://qiita.com/otera@github/items/d715f760aab2f6e88e67>

## 参照サイト
<https://www.youtube.com/watch?v=JdGnYNtuEtE>
