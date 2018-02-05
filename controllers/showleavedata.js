(function() {
  var module = angular.module("myApp");
  var showleavedata = function($scope,toastr,data) {
    $scope.gridOptions = {};
    $scope.simple = function() {
      toastr.success('Status Added Successfully');
    };
    $scope.simple1 = function() {
      toastr.error('Denied');
    };
    $scope.a = function(row) {
      row.status = "Accepted";
    };
    $scope.b = function(row) {
      row.status = "Rejected";
    };
    $scope.funclose = function(row){
       row.status=undefined;
    };
    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    }

    $scope.gridOptions={
       paginationPageSizes: [4,6,8,10],
       columnDefs : [{
      name: 'sno',
      displayName: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'fullname',
      width: 150
    }, {
      name: 'leave_from',
      type: 'date',
      cellFilter: 'date:\'dd.MM.yyyy\'',
       }
    , {
      name: 'leave_to',
      type: 'date',
      cellFilter: 'date:\'dd.MM.yyyy\'',
       }
, {
      name: 'reason',
    }, {
      name: 'status'

    }, {
      name: 'Action',
      cellTemplate: `<div ng-if="row.entity.status===undefined">
        <button type="button" class=" leave btn btn-success btn-xs" ng-click="grid.appScope.a(row.entity)" data-backdrop="false" data-toggle="modal" data-target="#myModali">Accept</button>
        <button type="button" class=" leave btn btn-danger btn-xs" ng-click="grid.appScope.b(row.entity)" data-backdrop="false" data-toggle="modal" data-target="#myModali">Reject</button>
      </div>
      <div id="myModali" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" ng-click="grid.appScope.funclose(row.entity);grid.appScope.simple1()" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to perform this action ?</p>
            </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary" ng-click="grid.appScope.simple()"  data-dismiss="modal">Sure</button>
              <button type="button" class="btn btn-default" ng-click="grid.appScope.funclose(row.entity);grid.appScope.simple1()"  data-dismiss="modal" >Close</button>
          </div>
        </div>
      </div>
    </div>

    `,
      width: 200
    }],rowTemplate: '<div ng-class="grid.appScope.rowColor(row, grid)">' +
            '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
        '</div>',enableFiltering: true
  };
    $scope.gridOptions.data = data.getleave();
    $scope.rowColor = function(row, grid) {
        var idx = grid.renderContainers.body.visibleRowCache.indexOf(row)
        return idx % 2 === 0 ? 'is-even' : 'is-odd';
    };
  }
  module.controller("showleavedata", showleavedata);
}());
