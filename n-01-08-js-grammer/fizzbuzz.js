(function () {
    'use strict';

    // Fizz Buzz とは、数字を数えていく英語圏の言葉遊びで、1 から順番に数字を発言していくものです。
    // '3' で割り切れる場合は「Fizz」
    // '5' で割り切れる場合は「Buzz」、
    // 両方で割り切れる場合（すなわち '15' で割り切れる場合）は「FizzBuzz」を数の代わりに発言します。

    for(var i = 1; i < 100001; i++){
        if (i % 15 == 0) {
            document.write('FizzBuzz ');
        } else if (i % 3 == 0) {
            document.write('Fizz ');
        } else if (i % 5 == 0) {
            document.write('Buzz ');
        } else {
            document.write(i + ' ');
        }
    }
})();