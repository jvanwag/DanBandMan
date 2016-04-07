angular.module('bandApp').controller('adminCtrl', function($scope, adminSvc, $state){

  $scope.password = 'admin';
  $scope.verifyAdmin = function() {
    var z = document.getElementById('adminP');
    var answer = prompt('please enter your password');
    if (answer===$scope.password) {
      z.style.display="block";
    } else {
      $state.go('home');
    }
  }
  $scope.verifyAdmin();

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
