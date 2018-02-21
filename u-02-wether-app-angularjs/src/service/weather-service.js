// open weatherのサイトからAPIで天気情報をとってくる

weatherApp.service('weatherService',['$resource', function ($resource) {

    this.getWeather = function(city, days){

        const weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast');

        return weatherResult = weatherAPI.get({
            q: city + ",jp",
            cnt: days,
            units: 'metric',
            appid: 'f09ccf28addde6486effcc15c32bfaf6'
        });

    };

}]);