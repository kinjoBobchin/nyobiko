//何かキーを押すと、時間あてゲームが停止する

(function(){
    'use strict';

    //時間を表示する場所
    var display = document.getElementById("display-area");
    //startボタン
    var startButton = document.getElementById("start-button");
    //stopボタン
    var stopButton = document.getElementById("stop-button");
    //initボタン
    var initButton = document.getElementById("init-button");
    //初期の時間
    var currentTime = null;

    //機能の定義：
    //①ボタンを押すと、時間が開始
    //②画面に、現在の時間が表示され、ダイアログで5秒で止めようと表示する
    //③ストップボタンを押す
    //④誤差-0.5秒以内→「すごい」、ちょうど「凄すぎワロタ」、それ以外→「おしい」

    //答えとのギャップ、答え→start,stopのファンクションを作っている、自分→いきなりfunctionの中にまとめようとしている
    //いろいろ、機能を作る→あとでオブジェクトとしてまとめたほうが良さそう

    //初期の状態を呼び出している
    init();

    //初期状態は、ストップウォッチが0の状態を表示
    function init() {
        currentTime = null;
        display.innerText = currentTime;
        console.log("初期化されたよ");
    }

    //スタートの機能
    function start() {
        //秒の表示

        function setTime() {
            var currentTime = new Date().getTime() /(24 * 60 * 60 * 1000);
            display.innerText = currentTime;
        }

        function countStart() {
            setInterval(setTime, 50);
        }
        countStart();

    }

    //ストップの機能
    function stop() {
        console.log("ストップおしたよ");
    }

    //イベントリスナーをまとめた
    startButton.onclick = start;
    stopButton.onclick = stop;
    stopButton.onclick = init;
})();