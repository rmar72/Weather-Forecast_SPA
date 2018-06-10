// CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location','zipCodeService', function($scope, $location, zipCodeService) {
  $scope.zipcode = zipCodeService.zipcode;

  $scope.$watch('zipcode', function(){
      zipCodeService.zipcode = $scope.zipcode;
  });

  $scope.submit = function(){
    $location.path("/forecast");
  }

}]);

weatherApp.controller('forecastController', ['$scope','$resource','zipCodeService', '$routeParams', function($scope, $resource, zipCodeService, $routeParams) {
  $scope.zipcode = zipCodeService.zipcode;

  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast`);
  $scope.weatherResult = $scope.weatherAPI.get({ zip: $scope.zipcode, cnt: $scope.days, appid: 'f104c63011715cf24a9021add17cca97' });
  // old query  $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});
  // 06092018 working url = http://api.openweathermap.org/data/2.5/forecast?appid=f104c63011715cf24a9021add17cca97&cnt=5&zip=80640,us

  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK-273)) + 32);
  }

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }
}]);
