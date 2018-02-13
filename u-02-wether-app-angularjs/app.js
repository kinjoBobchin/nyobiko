// moduleの定義
const weatherApp = angular.module('weatherApp', ['ngRoute','ngResource','ngMaterial','ngMessages']);

weatherApp.directive('headerToolbar', function () {
        // ディレクティブはオブジェクトを返す
    return {
        restrict: 'E',
        templateUrl: 'src/directives/header-toolbar.html',
        replace: true
    };
});