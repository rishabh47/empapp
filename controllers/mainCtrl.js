(function() {
  var module = angular.module("myApp");
  var mainCtrl = function($scope, data) {
    $scope.data = data.getupdate();
  };
  module.controller("mainCtrl", mainCtrl);
}());
