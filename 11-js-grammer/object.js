// 9.5 秒から 10.5 秒の間なら「すごい」、そうでないなら「残念」と表示する

(function () {
    'use strict';
    var game = {
        startTime: null,
        displayArea: document.getElementById("display-area")
    };

    function start() {
        game.startTime = new Date().getTime();
        document.body.onkeypress = stop;
    }

    function stop() {
        var currentTime = new Date().getTime();
        var seconds = (currentTime - game.startTime) / 1000;

        if(9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = seconds + "秒でした、時間感覚すごい！";
        } else {
            game.displayArea.innerText = seconds + "秒でした、残念！";
        }
    }

    if (confirm("OKを押して10秒経ったと思ったら何かボタンを押してください")) {
        start();
    }

})();