weatherApp.controller('forecastController', ['$scope', 'cityService', 'weatherService','$routeParams','$location',function ($scope, cityService, weatherService, $routeParams,$location) {

    // サービスで受け取った街を使えるように代入
    $scope.city = cityService.city;

    // 何日分のデータをとってくるかをパラメで受け取る
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

    $scope.convertDate = (date) => {
        return new Date(date * 1000);
    };

    $scope.currentNavItem = $routeParams.days;

    $scope.goto = (page) => {
        $location.path('/forecast/' + $routeParams.days);
    };

}]);