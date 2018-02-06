//controller
weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function (newCity) {
        cityService.city = newCity;
    });
}]);