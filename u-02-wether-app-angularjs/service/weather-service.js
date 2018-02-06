// open weatherのサイトからAPIで天気情報をとってくる

weatherApp.service('weatherService',['$http','$sce','$httpParamSerializerJQLike', function ($http, $sce, $httpParamSerializerJQLike) {

    this.getWeather = function(city, days){

        // trustAsResourceUrlにいれるまでは、まだセキュアなURLとして使用できない
        const unTrustedUrl = 'http://api.openweathermap.org/data/2.5/forecast/';

        // unTrustedUrlにくっつけるパラメータを定義
        const params = $httpParamSerializerJQLike({
            q: city + ",jp", //検索した都市名に国名をくっつけている
            cnt: days,
            units: 'metric',
            appid: 'f09ccf28addde6486effcc15c32bfaf6'
        });

        const promise = $http.jsonp($sce.trustAsResourceUrl(unTrustedUrl + '?' + params));
        promise.then(function(jsonp){
            return weatherResult = jsonp;
        });

    };

}]);