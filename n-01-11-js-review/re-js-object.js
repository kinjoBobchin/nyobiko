//要件：何かキーを押すと、時間あてゲームが停止する

//機能の定義：
//①ボタンを押すと、時間が開始
//②画面に、現在の時間が表示され、ダイアログで5秒で止めようと表示する
//③ストップボタンを押す
//④誤差-0.5秒以内→「すごい」、ちょうど「凄すぎワロタ」、それ以外→「おしい」

//答えとのギャップ、答え→start,stopのファンクションを作っている、自分→いきなりfunctionの中にまとめようとしている
//いろいろ、機能を作る→あとでオブジェクトとしてまとめたほうが良さそう

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
    //スタートの時間 - ストップの時間を足し上げて、ストップ機能を実装→https://dotinstall.com/lessons/stop_watch_js_v4/41207
    var timeToAdd;
    //イベントリスナーとボタンを紐ずけ
    startButton.onclick = start;
    stopButton.onclick = stop;
    initButton.onclick = init;

    //表示する時間
    function showDisplay(time) {
        if (0 >= time) {
            display.innerText = "いくぞ鬼太郎";
        } else if(3999 <= time && time <= 4000){
            display.innerText = time / 1000+ "秒" + "さすがじゃ鬼太郎";
        } else {
            display.innerText = time / 1000 + "秒" + "まだまだじゃな";
        }
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
        //countStart()を止める
        clearTimeout(countUpId);
        //スタート時間に、前回とめた時間を追加する
        timeToAdd += Date.now() - initTime;
        //ストップを押した時に、判定を追加する
        showDisplay(timeToAdd);
        //スタートおした時、ボタンの状態：スタート→押せる、ストップ→押せない
        stopButton.disabled = "true";
        startButton.disabled = "";
        initButton.disabled = "";
    }

    //初期の状態を呼び出し
    init();

})();