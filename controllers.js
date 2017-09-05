// CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function(){
      cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope','$resource','cityService', '$routeParams', function($scope, $resource, cityService, $routeParams) {
  $scope.city = cityService.city;

   $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/find?&APPID=3fc425b141f9a9eafc794eacd234dbce`);
  $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});
  // console.log($scope.weatherResult);

  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK-273)) + 32);
  }

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }
}]);
