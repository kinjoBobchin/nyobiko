# webpackのチュートリアル(HTML Webpack Plugin編)
![webpack](https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg "webpack")

## やりたいこと
・dev環境とproduction環境を分ける

## このチュートリアルの所要時間
・約5分ぐらいだと思います。

## 最終目標
①ファイルを更新したら、勝手にファイルが更新されて、ブラウザも更新される  
②ファイルをバンドル（まとめて）して、ビルドしたら、勝手にサーバーが立ち上がる  
③書いたファイルを勝手にコンパイルされる（typescript、pug、saas等）  

## チュートリアル後の最終目標とのギャップ
・NODE_ENVで環境を分けます  
・①②③がほぼほぼ達成されました。あとはtypescriptとpugのloaderを導入したら、この目的は果たされます  

## このチュートリアルの範囲
導入方法はこちら<https://youtu.be/NtyzJMi-a-M>  


### 1. NODE_ENV=productionをpackage.jspnに記載する

### 2. ExtractTextPluginを取り除く


### 3. 終了

# 感想  
これは、NODE_ENVを調べないといけない章だ・・・

## 参照サイト
<https://youtu.be/faFJw1wjQLE>
