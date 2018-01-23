var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.name = "テストしすぎさん";
    $scope.hobby = "コードの勉強";
    console.log($scope); //これで$scopeが何をしているかコンソールに出力する

    var people = function(firstName, lastName, age, $scope){
        return "山田テスト";
    };
    console.log(angular.injector().annotate(people));
});