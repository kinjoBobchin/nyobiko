// 自分が生まれてからの日数をアニメーションで表示してみましょう。
// 1日は、 24 x 60 x 60 秒という定義を利用すると便利です。

(function () {
    'use strict';
    var myBirthTime = new Date(1984, 10, 27, 11, 27);
    function updateParagraph() {
        var now = new Date();
        var days = (now.getTime() - myBirthTime.getTime()) / (1000 * 24 * 60 * 60 * 365);
        document.getElementById('birth-time').innerText = '私が生まれてから' + days + '年が経った。';
    }
    setInterval(updateParagraph, 500);
})();