var wdi = wdi  || {};

wdi.demoApp = angular.module("demoApp", []);

//def class SimpleController
wdi.SimpleController = function ($scope) {
  // @welcome
  $scope.welcome = "Hello Folks! It works, yay!";

  $scope.name = "";


  var minimum = 1000;
  var myBalance = 1500.78;
  $scope.hasSufficientFunds = function() {
    return myBalance > minimum;
}
}