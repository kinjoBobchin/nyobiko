#!/bin/bash
ls
date
echo メッセージを入力してください
read message
echo 入力されたメッセージ：$message

1行目の説明: #!/bin/bash シバンというbin/bashで実行してくださいという意味
2行目の説明: readは変数の宣言
3行目の説明: echoはrubyでいうputと同じ
4行目の説明: $を使って、宣言した変数を呼び出すことが出来る
5行目の説明: ファイルを作成したら「chmod a+x quiz.sh」で読み・書き・実行をできる権限を追加する