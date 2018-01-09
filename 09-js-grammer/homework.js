(function () {
    'use strict';
    var character = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

    //出力結果 「あい いう うえ えお おか かき きく くけ けこ こundefined」 わからなかったorz
    // for (var i = 0; i < character.length; i++) {
    //     document.write( character[i] + character[i + 1] + ' ');
    // }

    //答え
    for (let i = 0; i < character.length; i++) {
        for (let j = 0; j < character.length; j++) {
            document.write(character[i] + character[j] + ' ');
        }
    }
})();