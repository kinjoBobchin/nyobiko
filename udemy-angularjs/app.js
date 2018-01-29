var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch("handle",function (newValue, oldValue) {
        console.log("更新されました");
        console.log("新：" , newValue);
        console.log("旧：" , oldValue);
    });

}]);