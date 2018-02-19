# webpackのチュートリアル(HTML Webpack Plugin編)
![webpack](https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg "webpack")

## やりたいこと
・rimrafを使用
・イベントを独立させる

## このチュートリアルの所要時間
・約3分ぐらいだと思います。

## 最終目標
①ファイルを更新したら、勝手にファイルが更新されて、ブラウザも更新される  
②ファイルをバンドル（まとめて）して、ビルドしたら、勝手にサーバーが立ち上がる  
③書いたファイルを勝手にコンパイルされる（typescript、pug、saas等）  
④プルリクが通ってマージされたら、勝手にherokuにデプロイされる（難易度高、webpackじゃないかもしれない）  

## チュートリアル後の最終目標とのギャップ
・rimrafで生成したファイルを削除する事ができます。  
・①②③がほぼ達成されました。あとはtypescriptとpugのloaderを導入したら、この目的は果たされます  
・いろんなファイルが増えてきた時の対処方（イベントを独立させる）が出来るようになります  
ただ、増えすぎても、毎回chunckを書くのが面倒だなぁー


## このチュートリアルの範囲

動画<https://youtu.be/OvjB2Sfq9ZU>  


### 1. pluginsにfilenameを追加

~~~
//webpack.config.js
    //     collapseWhitespace: true
    // },
    hash: true,
    filename: './../index.html',
    template: './src/index.ejs'
}),
~~~


### 2. これだと、ファイル名を変更したい時に違う場所に生成されてしまうので変更

npm run prodをした時に常に最新のファイルを使えるようにしたいためrimrafをインストール
~~~
$ npm i -D rimraf
~~~  

インストールしたら、これをコマンドに組み込む
~~~
//package.json
  "scripts": {
    "dev": "webpack-dev-server --color",
    "prod": "npm run clean && webpack -p",
    "clean": "rimraf ./dist/*"
  },
~~~

### 3. ふたつめのテンプレートを生成したい場合

ふたつめのテンプレートを生成したい場合、new HtmlWebpackPluginをコピーして増やす  

~~~
//webpack.config.js
    plugins: [
        new HtmlWebpackPlugin({
            title: 'yeah template',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'yeah ×2 template',
            hash: true,
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: false,
            allChunks: true
        })
    ]
~~~

### 4. contact.htmlの中身を変更する

次に、contact.htmlの中身をwebpack.config.jsファイルで定義した内容を反映できるように変更する

~~~
//contact.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
    <h1>Contact Page</h1>
</body>
</html>
~~~

### 5. 各jsファイルが反映されるように変更
このままだと、読み込み先のファイルが、app.jsが自動で設定されているので、jsファイルも個別設定で反映できるように変更する  

~~~
//webpack.config.js
 module.exports = {
-    entry: './src/app.js',
+    entry: {
+        app: './src/app.js',
+        contact: './src/contact.js'
+    },
     output: {
         path: __dirname + '/dist',
-        filename: 'app.bundle.js'
+        filename: '[name].bundle.js' //entryのファイル名が入る
     },
~~~

### 6. 各イベントを独立させる

まだ、このままでは、indexページと、contactページを開くと、両方のJavascriptが呼び出されてしまうのでわける対処を行う

~~~
//webpack.config.js

      //     collapseWhitespace: true
      // },
      hash: true,
      excludeChunks: ['contact'],
      template: './src/index.html'
  }),
  new HtmlWebpackPlugin({
      title: 'yeah ×2 template',
      hash: true,
      filename: 'contact.html',
      chunks: ['contact'],
      template: './src/contact.html'
  }),
~~~

これでファイル名で呼び出すイベントを独立できました。

### 8. 終了
今回は、ルートみたいなイベントを独立させるのが初めて自分で設定したため
ちょっと何が起こっているのかを理解するのが、後半にきて理解できた。  

# 感想


## 参照サイト
<https://youtu.be/m7V0OackwxY>
