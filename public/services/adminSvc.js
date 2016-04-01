angular.module('bandApp').service('adminSvc', function($http){

  this.newInstrument = function(obj) {
    return $http.post('/instruments', obj)
    .then(function(response){
      return response.data;
    })
  }
  this.removeInstrument = function(id) {
    return $http.delete('/instruments?_id=' + id)
    .then(function(response){
      return response.data;
    })
  }
})
