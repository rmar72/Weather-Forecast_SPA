//DIRECTIVES
weatherApp.directive('weatherReport', function(){
  return {
    restrict:'E',
    templateUrl:"directives/weatherReport.html",
    replace:true,
    scope: {
      weatherDay: "=", //2way binding object
      convertToStandard: "&", // function
      convertToDate: "&", // fn
      dateFormat: "@" // 1way binding string
    }
  }
});
