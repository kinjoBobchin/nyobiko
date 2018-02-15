//route
weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'src/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'src/forecast.html',
            controller: 'forecastController'
        })

        .when('/settings/color', {
            templateUrl: 'src/settings-color.html',
            config: 'settingsController'
        })

        .when('/forecast/:days', {
            templateUrl: 'src/forecast.html',
            controller: 'forecastController'
        });
});