weatherApp.controller('forecastController', ['$scope', 'cityService', 'weatherService','$routeParams',function ($scope, cityService, weatherService, $routeParams) {

    // サービスで受け取った街を使えるように代入
    $scope.city = cityService.city;

    // 何日分のデータをとってくるかをパラメで受け取る
    $scope.days = $routeParams.days || '2';

    $scope.convertDate = function (date) {
        return new Date(date * 1000);
    };

}]);