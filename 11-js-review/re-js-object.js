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
    //getTime()→秒に変換

    //機能の定義：
    //①ボタンを押すと、時間が開始
    //②画面に、現在の時間が表示され、ダイアログで5秒で止めようと表示する
    //③ストップボタンを押す
    //④誤差-0.5秒以内→「すごい」、ちょうど「凄すぎワロタ」、それ以外→「おしい」

    //答えとのギャップ、答え→start,stopのファンクションを作っている、自分→いきなりfunctionの中にまとめようとしている
    //いろいろ、機能を作る→あとでオブジェクトとしてまとめたほうが良さそう

    //初期の状態を呼び出し
    init();

    //初期状態は、ストップウォッチが0の状態を表示
    function init() {
        display.innerText = 0;
        stopButton.disabled = "true";
    }

    //スタートの機能
    function start() {

        //起点となる時間の取得
        function setTime() {
            currentTime = new Date().getTime();
        }

        //起点となる時間からの差分
        function countUpTime() {
            var startTime = new Date().getTime();
            display.innerText = (startTime - currentTime) / 1000;
        }

        //差分表示
        function countStart() {
            setInterval(countUpTime, 50);
        }

        countStart();
        setTime();

        //スタートおした時、ボタンの状態：スタート→押せない、ストップ→押せる
        stopButton.disabled = "";
        startButton.disabled = "true";
    }

    //ストップの機能
    function stop() {
        console.log("ストップおしたよ");
        stopButton.disabled = "true";
        startButton.disabled = "";

    }

    //イベントリスナーをまとめた
    startButton.onclick = start;
    stopButton.onclick = stop;
    initButton.onclick = init;
})();