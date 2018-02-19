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
・今まで、別PCになると、なんでコピー出来ないのかなーと思っていたらpackage.jsonを共有していないからっぽいです。
<https://qiita.com/sinmetal/items/395edf1d195382cfd8bc>  
なのでpackage.jsonもgitにあげて共有するようにします。



## このチュートリアルの範囲
細かい事は動画の中にあるので書かないが、インストールしているものだけは記録するようにする
動画<https://youtu.be/zhA5LNA3MxE>  

・babel<https://babeljs.io/docs/setup/#installation>  
・ReactのGithub<https://github.com/facebook/react>  


# 感想
この章でbableの導入できた。ちょっとインストールするの多い。

## 参照サイト
<https://youtu.be/m7V0OackwxY>
