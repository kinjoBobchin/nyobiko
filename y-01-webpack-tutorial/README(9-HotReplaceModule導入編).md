# webpackのチュートリアル(HTML Webpack Plugin編)
![webpack](https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg "webpack")

## やりたいこと
・ExtractTextPluginを使わずとも、ファイル更新のタイミングで、ブラウザの表示も更新する

## このチュートリアルの所要時間
・約3分ぐらいだと思います。

## 最終目標
①ファイルを更新したら、勝手にファイルが更新されて、ブラウザも更新される  
②ファイルをバンドル（まとめて）して、ビルドしたら、勝手にサーバーが立ち上がる  
③書いたファイルを勝手にコンパイルされる（typescript、pug、saas等）  

## チュートリアル後の最終目標とのギャップ
・hotmodulereplacementを導入します  
・①②③がほぼほぼ達成されました。あとはtypescriptとpugのloaderを導入したら、この目的は果たされます  

## このチュートリアルの範囲
導入方法はこちら<https://webpack.js.org/guides/hot-module-replacement/>  


### 1. webpack.config.jsの追記

### 2. ExtractTextPluginを取り除く


### 3. 終了

# 感想  
今回はどこもハマるところはなかった。  
このhotモードを使うのがモダンって言っていた。

## 参照サイト
<https://youtu.be/faFJw1wjQLE>
