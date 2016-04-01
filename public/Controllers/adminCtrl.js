angular.module('bandApp').controller('adminCtrl', function($scope, adminSvc){
    $scope.addInstrument = function(obj) {
      adminSvc.newInstrument(obj)
      .then(function(response){
        $scope.instrument = null;
        alert('Instrument successfully added!!');
        return response.data;
})
    }
    $scope.deleteInstrument = function(obj) {
      adminSvc.removeInstrument(obj._id)
      .then(function(response){
        alert('Instrument Deleted!!');
        location.reload();
      })
    }
})
