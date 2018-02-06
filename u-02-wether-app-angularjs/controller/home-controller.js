//controller
weatherApp.controller('homeController',['$location','$scope','cityService',function($location,$scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function (newCity) {
        cityService.city = newCity;
    });

    $scope.submit = function () {
        $location.path('/forecast');
    };
}]);