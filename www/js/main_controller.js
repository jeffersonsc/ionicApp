var app = angular.module('questApp', ['ionic'])

app.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft()
  }

  $scope.printWin = function (val) {
    $scope.text_print = val;
    console.log(val);
  }
})