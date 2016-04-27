var app = angular.module('questApp', ['ionic'])

app.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft()
  }

  $scope.toggleRight = function () {
    $ionicSideMenuDelegate.toggleRight()
  }

  $scope.items = [
    {description: 'Teste de notificação', img: 'http://www.gravatar.com/avatar/00000000000000000000000000000000'},
    {description: 'Teste de notificação 2', img: 'http://www.gravatar.com/avatar/00000000000000000000000000000000'},
    {description: 'Teste de notificação 3', img: 'http://www.gravatar.com/avatar/00000000000000000000000000000000'}]
})