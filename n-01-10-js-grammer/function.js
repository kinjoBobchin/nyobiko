(function () {
    'use strict';
    // 1982 年 12 月 17 日 12 時 30 分を誕生日として、 myBirthTime という変数に代入しています。
    // この new Dateでは、年や日時は通常通りですが、月のみ 0 はじまりとなっているため、注意。
    var myBirthtime = new Date(1982, 11, 17, 12, 30);
    function updateParagraph() {
        var now = new Date();
        var seconds = (now.getTime() - myBirthtime.getTime()) / 1000;
        document.getElementById('birth-time').innerText = 'うまれてから' + seconds + '秒経過。';
    }
    setInterval(updateParagraph, 1000);
})();