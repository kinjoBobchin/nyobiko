//controller
weatherApp.controller('homeController',['$location','$scope','cityService',function($location, $scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', (newCity) => {
        cityService.city = newCity;
    });

    $scope.submit = () => {
        $location.path('/forecast/2');
    };
}]);