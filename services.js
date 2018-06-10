//SERVICES
weatherApp.service('zipCodeService' ,function(){
  this.zipcode = 80640;
});

weatherApp.weatherService('weatherService',['$resource', function($resource){
  this.getWeather = function(zipcode, days){
    var weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast`);
    return weatherAPI.get({ zip: zipcode, cnt: days, appid: 'f104c63011715cf24a9021add17cca97' });
    // old query  $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});
    // 06092018 working url = http://api.openweathermap.org/data/2.5/forecast?appid=f104c63011715cf24a9021add17cca97&cnt=5&zip=80640,us
  }

}]);