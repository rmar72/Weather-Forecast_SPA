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

weatherApp.controller('forecastController', ['$scope','$resource','zipCodeService', 'weatherService', '$routeParams', function($scope, $resource, zipCodeService, weatherService, $routeParams) {
  $scope.zipcode = zipCodeService.zipcode;

  $scope.days = $routeParams.days || '2';

  $scope.weatherResults = weatherService.getWeather($scope.zipcode , $scope.days);

  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK-273)) + 32);
  }

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }
}]);
