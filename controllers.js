// CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location','cityService', function($scope, $location, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function(){
      cityService.city = $scope.city;
  });

  $scope.submit = function(){
    $location.path("/forecast");
  }

}]);

weatherApp.controller('forecastController', ['$scope','$resource','cityService', '$routeParams', function($scope, $resource, cityService, $routeParams) {
  $scope.city = cityService.city;

   $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast`);
  $scope.weatherResult = $scope.weatherAPI.get({ zip: "80640,us", cnt: $scope.days, appid: 'f104c63011715cf24a9021add17cca97' });
  // old query  $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});
  // 06092018 working url = http://api.openweathermap.org/data/2.5/forecast?appid=f104c63011715cf24a9021add17cca97&cnt=5&zip=80640,us

  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK-273)) + 32);
  }

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }
}]);
