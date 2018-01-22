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
    var initTime;
    //カウントアップする時間
    var countUpTime;
    //countUpIdを定義して、カウントしている時間を止める
    var countUpId;
    //スタートの時間 - ストップの時間を足し上げて、ストップ機能を実装
    //詳しい説明はここhttps://dotinstall.com/lessons/stop_watch_js_v4/41207
    var timeToAdd;

    //機能の定義：
    //①ボタンを押すと、時間が開始
    //②画面に、現在の時間が表示され、ダイアログで5秒で止めようと表示する
    //③ストップボタンを押す
    //④誤差-0.5秒以内→「すごい」、ちょうど「凄すぎワロタ」、それ以外→「おしい」

    //答えとのギャップ、答え→start,stopのファンクションを作っている、自分→いきなりfunctionの中にまとめようとしている
    //いろいろ、機能を作る→あとでオブジェクトとしてまとめたほうが良さそう

    //表示する時間
    function showDisplay(time) {
        display.innerText = time;
    }

    //初期状態は、ストップウォッチが0の状態を表示
    function init() {
        initTime = 0;
        countUpTime = 0;
        timeToAdd = 0;
        showDisplay(initTime);
        stopButton.disabled = "true";
        initButton.disabled = "true";
    }

    //起点となる時間の取得
    function startTime() {
        initTime = Date.now();
        countUp();
    }

    //時間をはかる
    function countUp() {
        countUpId = setTimeout(function () {
            countUpTime = Date.now() - initTime + timeToAdd;
            countUp();
            showDisplay(countUpTime);
        }, 10);
    }


    //スタートの機能
    function start() {
        //スタートボタンを押したら発動する
        startTime();
        //スタートおした時、ボタンの状態を変化：スタート→押せない、ストップ→押せる
        stopButton.disabled = "";
        startButton.disabled = "true";
    }

    //ストップの機能
    function stop() {
        //ToDo
        //countStart()を止める
        clearTimeout(countUpId);
        //スタート時間に、前回とめた時間を追加する
        timeToAdd += Date.now() - initTime;
        console.log(timeToAdd)
        //判定結果を表示する

        //スタートおした時、ボタンの状態：スタート→押せる、ストップ→押せない
        stopButton.disabled = "true";
        startButton.disabled = "";
        initButton.disabled = "";
    }

    //イベントリスナーをまとめた
    startButton.onclick = start;
    stopButton.onclick = stop;
    initButton.onclick = init;

    //初期の状態を呼び出し
    init();

})();