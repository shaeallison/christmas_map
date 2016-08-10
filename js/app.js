var app = angular.module('myApp', ['cities', 'angularModalService']);

app.controller('BaseController', ['$scope', 'ModalService', function($scope, ModalService) {

  $scope.details = {show: false}; /* only piece needed for ng-show */

  /* $scope.customResult = null;

  $scope.showCustom = function() {

    ModalService.showModal({
      templateUrl: "custom-modal.html",
      controller: "CustomController"
    }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
      });
    });

  }; */

}]);



