//何かキーを押すと、時間あてゲームが停止する

(function(){
    'use strict';

    //時間を表示する場所
    var display = document.getElementById("display-area");
    //startボタン
    var startButton = document.getElementById("start-button");
    //stopボタン
    var stopButton = document.getElementById("stop-button");

    //機能の定義：
    //①ボタンを押すと、時間が開始
    //②画面に、現在の時間が表示され、ダイアログで5秒で止めようと表示する
    //③ストップボタンを押す
    //④誤差-0.5秒以内→「すごい」、ちょうど「凄すぎワロタ」、それ以外→「おしい」

    //答えとのギャップ、答え→start,stopのファンクションを作っている、自分→いきなりfunctionの中にまとめようとしている
    //いろいろ、機能を作る→あとでオブジェクトとしてまとめたほうが良さそう
    function start() {
        // var currentTime = new Date().getTime;
        // display.innerText = currentTime;
        console.log("ボタン反応してるよ");
    }
    startButton.click(start);


})();