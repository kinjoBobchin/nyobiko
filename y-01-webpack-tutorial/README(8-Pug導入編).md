# webpackのチュートリアル(HTML Webpack Plugin編)
![webpack](https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg "webpack")

## やりたいこと
・PUGをコンパイルする

## このチュートリアルの所要時間
・約3分ぐらいだと思います。

## 最終目標
①ファイルを更新したら、勝手にファイルが更新されて、ブラウザも更新される  
②ファイルをバンドル（まとめて）して、ビルドしたら、勝手にサーバーが立ち上がる  
③書いたファイルを勝手にコンパイルされる（typescript、pug、saas等）  

## チュートリアル後の最終目標とのギャップ
・rimrafで生成したファイルを削除する事ができます。  
・①②③がほぼほぼ達成されました。あとはtypescriptとpugのloaderを導入したら、この目的は果たされます  

## このチュートリアルの範囲
Pugのgithub、インストール方法はこっち<https://github.com/pugjs/pug>  
Pugの公式リファレンス、文法はこっち<https://pugjs.org/api/getting-started.html>  
動画<https://youtu.be/nLR5yUCjTis>  


### 1. index.html → index.pugに変更

### 2. index.pugの中身をpugの書き方に変更

~~~
<!DOCTYPE html>
html
  head
    meta(http-equiv="Content-type" content="text/html; charset=utf-8")
    title <%= htmlWebpackPlugin.options.title %>
  body
      div(id="root")
~~~

### 3. pug-htmo-loaderのインストールと、読み込むファイル名をhtml→pugに変更

~~~
$ npm i -D pug pug-html-loader
~~~

~~~
//webpack.config.js
        new HtmlWebpackPlugin({
            title: 'yeah template',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            excludeChunks: ['contact'],
            template: './src/index.pug'
        }),
        new HtmlWebpackPlugin({
            title: 'yeah ×2 template',
            hash: true,
            filename: 'contact.html',
            chunks: ['contact'],
            template: './src/contact.pug'
~~~

### 4. html-loaderとraw-loaderを追加
~~~
//package.json
+   "html-loader": "^0.5.5",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "pug": "^2.0.0-rc.4",
    "pug-html-loader": "^1.1.5",
+   "raw-loader": "^0.5.1",
~~~


### 5. html-loaderを追加
law-loaderは使用してみたけど、includeがおかしくなっていたので使わなかった。

~~~
//webpack.config.json
    },
    {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']

~~~

### 6. header.pugを追加

ファイル構成は下記のようになっている
~~~
.
├── dist
│   ├── app.bundle.js
│   ├── app.css
│   ├── contact.bundle.js
│   ├── contact.html
│   └── index.html
├── package-lock.json
├── package.json
├── src
│   ├── app.js
│   ├── app.scss
│   ├── contact.js
│   ├── contact.pug
│   ├── includes
│   │   └── header.pug
│   └── index.pug
└── webpack.config.js
~~~

  
header.pugの中身は適当で良いです。
~~~
//header.pug
h1 wanwan！
~~~

### 7. 終了

# 感想  
pugのコンパイルエラーでハマってしまった。。。  
動画のコメント欄にあるのだが、結局html-loaderをインストールしてpug-html-loaderと併用したらうまく治りました。  
law-loaderを使用すると、reactのレンダリングがうまくいかなかったので消しました。  
そして、ブラウザを再読込してnpm run devするとやっとループから抜けれます。  
これでやりたかったことのほぼすべてが完了しました。  
残りのオプションとして、typescriptとhotモードの実装を目指します。
~~~

~~~

## 参照サイト
<https://youtu.be/m7V0OackwxY>
