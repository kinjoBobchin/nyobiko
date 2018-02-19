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
・babelとReactのインストールをしています  babelは使用したいので導入しました。  
・①②③がほぼ達成されました。あとはtypescriptとpugのloaderを導入したら、この目的は果たされます


## このチュートリアルの範囲
動画<https://youtu.be/zhA5LNA3MxE>  

・babel<https://babeljs.io/docs/setup/#installation>  
・ReactのGithub<https://github.com/facebook/react>  

### 1. react、react-domのインストール

~~~
$ npm i -D react react-dom
~~~

### 2. ES6とJSXを使用するため、babelもインストールする

~~~
$ npm i -D babel babel-preset-react babel-preset-es2015
~~~

### 3. .bablercファイルを作成し、prestを記載
~~~
//.babelrc
{
    "presets": ['es2015','react']
}
~~~

### 4. app.jsにreactとreact-domをimport
npmのインストールは終わったので、app.jsに記載していく
<https://youtu.be/zhA5LNA3MxE?t=3m33s>  

### 5. app.ejsにidがrootのDOMを書いて、テストをする  
~~~
//app.ejs
  <body>
      <div id="root"></div>
  </body>
~~~

### 6. babel-loader、babel-coreのインストール  

~~~
$ npm i -D babel-loader babel-core
~~~

### 7. Javascriptを読む際に、ルールを追加する

~~~
// webpack.config.js
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    }
~~~

### 8. 終了


# 感想
この章でbableの導入できた。ちょっとインストールするの多い。

## 参照サイト
<https://youtu.be/m7V0OackwxY>
