var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log, $filter) {
    console.log($log); //$logが何をしているかコンソールに出力する
    $log.log("テストですよ");
    $log.debug("テストですよ");
    $log.warn("テストですよ");
    $log.info("テストですよ");
    $log.error("テストですよ");

    $scope.name = "ken";
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.log($scope.name);
    $log.log($scope.formattedName);
});