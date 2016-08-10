var app = angular.module('myApp');

app.controller('CustomController', ['$scope', 'close', function($scope, close) {

  $scope.close = close;

}]);
