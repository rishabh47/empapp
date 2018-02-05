(function() {
  var module = angular.module("myApp");
  var leaveCtrl = function($scope, toastr, data, $filter, $location) {

    $scope.simple = function() {
      toastr.success('Leave Added Successfully');
      $location.path("/leavelist")
    };

    $scope.clear = function() {
      $scope.dt = null;
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };


    $scope.clear1 = function() {
      $scope.dt1 = null;
    };

    $scope.open1 = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened1 = true;
    };
    $scope.setDate = function(year, month, day) {
            $scope.dt1 = new Date(year, month, day);
            $scope.dt2 = new Date(year, month, day);
      };

    $scope.dateOptions1 = {
      formatYear: 'yy',
      startingDay: 1
    };
    $scope.addNewLeave = function() {
       $scope.data = {
        fullname: $scope.newname,
        leave_from: moment($scope.dt).format('ll'),
        leave_to: moment($scope.dt1).format('ll'),
        reason: $scope.reason,
        type: "Leave"
      };
      data.setleave($scope.data);
    };
  }
  module.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      timeOut: 1500
    });
  });
  module.controller("leaveCtrl", leaveCtrl);
}());
