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
<https://www.npmjs.com/package/extract-text-webpack-plugin>

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

### 4. app.jsにapp.cssをrequireで宣言しておく

~~~
// app.js
+ const css = require('./app.css');

console.log("hello,webpack,again");
~~~

### 5. style-loaderもインストールする

これだけでは、まだ動かないので、style-loderを使用する
~~~
$ npm install style-loader --save-dev
~~~

すると、package.jsonにCSS-loaderが追加されているのが確認できます

~~~
//package.json
(省略)
  "devDependencies": {
    "css-loader": "^0.28.9",
    "html-webpack-plugin": "^2.30.1",
    "style-loader": "^0.20.2",
    "webpack": "^3.11.0"
  }
(省略)
~~~


moduleに、style-loaderを追加
~~~
//webpack.config.js
    module:{
        rules: [
            {
                test: /\.css$,
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ],
    },
~~~

これで、css-loaderとstyle-loaderが機能するようになったはずです。

### 6. sass-loader、node-sassのインストール

~~~
$ npm install sass-loader node-sass --save-dev
~~~

package.jsonにも追加を確認しました。
~~~
(省略)
  "devDependencies": {
    "css-loader": "^0.28.9",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.20.2",
    "webpack": "^3.11.0"
  }
(省略)
~~~

### 7. cssを読み込んでいた各所の拡張子をscssに変更
~~~
//app.js
const css = require('./app.css');
~~~  
↓  
~~~
//app.js
const css = require('./app.scss');
~~~

~~~
//webpack.config.js
module:{
    rules: [
        {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
    ],
},
~~~

### 8. ExtractTextPluginのインストール
上記まででscssは動くようになりますが、
ExtractTextPluginをインストール（英語が読めなかったのであとで調べます）

~~~
$ npm install extract-text-webpack-plugin -D
~~~
  
package.jsonにも反映されています
~~~
//package.json
(省略)
  "devDependencies": {
    "css-loader": "^0.28.9",
    "extract-text-webpack-plugin": "^3.0.2",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.20.2",
    "webpack": "^3.11.0"
  }
(省略)
~~~

そして、ここのリンクにあるようにwebpack.config.jsの中身を下記のように変更  
<https://www.npmjs.com/package/extract-text-webpack-plugin#extracting-sass-or-less>

~~~
//webpack.config.js
         rules: [
             {
                 test: /\.scss$/,
-                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
+                use: ExtractTextPlugin.extract({
+                    fallback: 'style-loader',
+                    use: ['css-loader', 'sass-loader']
+                })
             }
         ],
     },
-    plugins: [new HtmlWebpackPlugin({
-        title: 'yeah template',
-        minify: {
-            collapseWhitespace: true
-        },
-        hash: true,
-        template: './src/index.ejs'
-        })
+    plugins: [
+        new HtmlWebpackPlugin({
+            title: 'yeah template',
+            minify: {
+                collapseWhitespace: true
+            },
+            hash: true,
+            template: './src/index.ejs'
+        }),
+        new ExtractTextPlugin("app.css")
     ]
 };
~~~

ここ結構はまってしまいましたが、ちゃんと解決先のリンクみたら書いてあります。

あと、minifyを消すの忘れてました。

~~~
(省略)
new HtmlWebpackPlugin({
    title: 'yeah template',
    // minify: {
    //     collapseWhitespace: true
    // },
    hash: true,
    template: './src/index.ejs'
}),
(省略)
~~~

### 8. 終了

動画では、更にファイルオプションを追加していましたが、これで動くので一旦止めて起きます。

それと下記のファイルにオプションの解説があるのでヒントになりそう
<https://www.npmjs.com/package/extract-text-webpack-plugin#extracting-sass-or-less>



# 感想
後半は、なぜそうしているのか英語がわからなかった。(特に12分あたり)  
<https://youtu.be/m7V0OackwxY?t=12m1s>
githubにあるREADME通りにすればハマることは少なくなるヒントがあると思う。  


## 参照サイト
<https://youtu.be/m7V0OackwxY>
