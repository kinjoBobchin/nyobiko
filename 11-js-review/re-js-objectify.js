//演習でつくった時間あてゲームをオブジェクト化する

(function(){
    'use strict';

    var game = {
        display: document.getElementById("display-area"), //時間を表示する場所
        startButton: document.getElementById("start-button"), //startボタン
        stopButton: document.getElementById("stop-button"), //stopボタン
        initButton: document.getElementById("init-button"), //initボタン
        initTime: null, //初期の時間
        countUpTime: null, //カウントアップする時間
        countUpId: null, //countUpIdを定義して、カウントしている時間を止める
        timeToAdd: null, //スタートの時間 - ストップの時間を足し上げて、ストップ機能を実装→https://dotinstall.com/lessons/stop_watch_js_v4/41207

        //初期状態は、ストップウォッチが0の状態を表示
        init: function () {
            game.initTime = 0;
            game.countUpTime = 0;
            game.timeToAdd = 0;
            game.showDisplay(game.initTime);
            game.stopButton.disabled = "true";
            game.initButton.disabled = "true";
        },
        //表示する時間
        showDisplay: function(time) {
            if (0 >= time) {
                game.display.innerText = "いくぞ鬼太郎";
            } else if(3999 <= time && time <= 4000){
                game.display.innerText = time / 1000+ "秒" + "さすがじゃ鬼太郎";
            } else {
                game.display.innerText = time / 1000 + "秒" + "まだまだじゃな";
            }
        },
        //起点となる時間の取得
        startTime: function () {
            game.initTime = Date.now();
            game.countUp();
        },
        //時間をはかる
        countUp: function() {
            game.countUpId = setTimeout(function () {
                game.countUpTime = Date.now() - game.initTime + game.timeToAdd;
                game.countUp();
                game.showDisplay(game.countUpTime);
            }, 10);
        },
        //スタートの機能
        start: function () {
            //スタートボタンを押したら発動する
            game.startTime();
            //スタートおした時、ボタンの状態を変化：スタート→押せない、ストップ→押せる
            game.stopButton.disabled = "";
            game.startButton.disabled = "true";
        }
    };
    //イベントリスナーとボタンを紐ずけ
    game.startButton.onclick = game.start;
    game.stopButton.onclick = stop;
    game.initButton.onclick = game.init;


    //ストップの機能
    function stop() {
        //countStart()を止める
        clearTimeout(game.countUpId);
        //スタート時間に、前回とめた時間を追加する
        game.timeToAdd += Date.now() - game.initTime;
        //ストップを押した時に、判定を追加する
        game.showDisplay(game.timeToAdd);
        //スタートおした時、ボタンの状態：スタート→押せる、ストップ→押せない
        game.stopButton.disabled = "true";
        game.startButton.disabled = "";
        game.initButton.disabled = "";
    }

    //初期の状態を呼び出し
    game.init();

})();