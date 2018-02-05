(function() {
  var module = angular.module("myApp")
  module.constant('PersonSchema', {
    type: 'object',
    properties: {
      fullname: {
        type: 'string',
        title: 'Full Name'
      },
      username: {
        type: 'string',
        title: 'User Name'
      },
      email: {
        type: 'string',
        title: 'Email '
      }
    }
  });
  module.service("RowEditor", function RowEditor($rootScope, $modal) {

    var service = {};
    service.editRow = editRow;

    function editRow(grid, row) {
      $modal.open({
        templateUrl: '../templates/edit-modal.html',
        controller: ['$modalInstance', 'PersonSchema', 'grid', 'row', RowEditCtrl],
        controllerAs: 'vm',
        resolve: {
          grid: function() {
            return grid;
          },
          row: function() {
            return row;
          }
        }
      });
    }

    return service;
  });

  function RowEditCtrl($modalInstance, PersonSchema, grid, row) {
    var vm = this;

    vm.schema = PersonSchema;
    vm.entity = angular.copy(row.entity);
    vm.form = [
      'fullname',
      'username',
      'email',
    ];

    vm.save = save;

    function save() {
      // Copy row values over
      row.entity = angular.extend(row.entity, vm.entity);
      $modalInstance.close(row.entity);
    }
  }
}());
