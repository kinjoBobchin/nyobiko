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
・dev serverを導入する  
ちょっと丁寧にやりすぎて時間かかりすぎているのではしょっている部分もでてくるはず・・・。
これによって、①は達成


## このチュートリアルの範囲
・webpack-dev-serverを追加する  
<https://youtu.be/gH4LxB6NkNc>

### 1. dev-serverのインストール

~~~
$ npm i webpack-dev-server -D
~~~

すると、package.jsonにwebpack-dev-serverが追加されているのが確認できます

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
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  }
(省略)
~~~

### 2. package.jsonのrunコマンドを変更する

ファイルの構成はこうなっています
~~~
//package.json
  "scripts": {
    "dev": "webpack-dev-server",
    "prod": "webpack -p"
  },
~~~


### 4. 終了


# 感想
簡単すぎる。  
やっと、自動で更新がされるようになった。

## 参照サイト
<https://youtu.be/m7V0OackwxY>
