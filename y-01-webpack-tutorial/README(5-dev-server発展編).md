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
これによって、②が達成。いまのところ①、②が達成されます


## このチュートリアルの範囲
・webpack-dev-serverを追加する  
<https://youtu.be/soI7X-7OSb4>
公式ドキュメントは下記にあります
<https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx>
  
statsオプションの詳細は下記にあります
<https://webpack.js.org/configuration/stats/>  

### 1. ブラウザが自動で立ち上がる！

この章でserverを立ち上げたタイミングで、ブラウザ起動が自動でされるようになります

# 感想
この章でブラウザが自動で立ち上げれた。
ここまでの章と比べて、dev-serverの導入は簡単。

## 参照サイト
<https://youtu.be/m7V0OackwxY>
