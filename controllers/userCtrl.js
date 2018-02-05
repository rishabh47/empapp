(function() {
  var module = angular.module("myApp");
  var userCtrl = function($scope, data, $location, toastr) {

  //   $scope.role = [{
  //     value: '',
  //     displayName: 'Select a Value'
  //   }, {
  //     value: 'Designer',
  //     displayName: 'Designer'
  //   }, {
  //     value: 'Programmer',
  //     displayName: 'Programmer'
  //   }, {
  //     value: 'Architect',
  //     displayName: 'Architect'
  //   }];
  //   if(data.grole()!="")
  //   {
  //   $scope.role.unshift(data.grole());
  // }
  //   console.log(data.grole());
  $scope.rolei=data.grole();
  $scope.role=[];
  angular.forEach($scope.rolei,function(value,key){
    if(value.status==='Activated')
    {
      $scope.role=$scope.rolei;
    }
    if(value.status==='Deactivated')
    {
      $scope.role.pop();
    }
  });

    $scope.supervisor = [{
      value: '',
      displayName: 'Select a Value'
    }, {
      value: 'Manager',
      displayName: "Manager"
    }, {
      value: 'Team Lead',
      displayName: 'Team Lead'
    }, {
      value: 'HR',
      displayName: 'HR'
    }];


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
    $scope.simple = function() {
      toastr.success('User Added Successfully');
      $location.path("/userlist")
    };
    $scope.addNewItem = function() {
      $scope.data = {
        fullname: $scope.newname,
        username: $scope.newusername,
        email: $scope.newemail,
        createdon: moment().format('LLL'),
        type: "User"
      };
      data.setuser($scope.data);
    };
  }
  module.controller("userCtrl", userCtrl);
  module.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      timeOut: 1500
    });
  });
  module.directive('wjValidationError', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctl) {
        scope.$watch(attrs['wjValidationError'], function(errorMsg) {
          elm[0].setCustomValidity(errorMsg);
          ctl.$setValidity('wjValidationError', errorMsg ? false : true);
        });
      }
    };
  });
}());
