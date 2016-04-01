angular.module('bandApp').controller('mainCtrl', function($scope, $http, ngCart){

  $scope.hide = false;
  $scope.dropShow = function(){
    $scope.hide = true;
  }

  $(document).ready(function(){
    $('#imenuDrop').mouseenter(function(){
      $('.instrDrop').slideDown('medium');
      $('.instrDroper').slideUp('medium');
    })
    $('.instrDrop').mouseleave(function(){
      $('.instrDrop').slideUp('medium');
    })
    $('#imenuDroper').mouseenter(function(){
      $('.instrDroper').slideDown('medium');
      $('.instrDrop').slideUp('medium');
    })
    $('.instrDroper').mouseleave(function(){
      $('.instrDroper').slideUp('medium');
    })
    $('#cartS').on('click', function(){
      $('#cartD').slideDown('medium');
      $('#closeCart').show();
      $('#checkoutBut').show();
    })
    // $('#cartD').blur(function(){
    //   $('#cartD').slideUp('medium');
    // })
  })

  $scope.showForm = function() {
    var a = document.getElementById('contForm');
    a.style.display="block";
  }
  $scope.hideForm = function() {
    var a = document.getElementById('contForm');
    a.style.display="none";
  }
  $scope.conAl = function() {
    // setTimeout(function(){
    alert('HUH HA your email successfully sent!');
  // }, 3000)
  }

      $scope.getInstruments = function () {
        $http.get('/instruments').then(function(response) {
            $scope.instruments = response.data;
        })
    }

    $scope.getInstruments();

    $scope.hideBImg = function () {
      var b = document.getElementById('closeImg');
      b.style.display="none";
    }
    $scope.expandPic = function(picture) {
      var b = document.getElementById('closeImg');
      b.style.display="block";
     $scope.bigPic = picture;
    }

    $scope.showInfo = function() {
      var c = document.getElementById('infoB');
      c.style.display="block";
    }

    $scope.hideCart = function() {
      var d = document.getElementById('cartD');
      var e = document.getElementById('closeCart');
      var f = document.getElementById('checkoutBut');
      d.style.display="none";
      e.style.display="none";
      f.style.display="none";

    }

    $scope.numItems = ngCart.getCart().items;

    ngCart.setTaxRate(9.68);
    // ngCart.setShipping($scope.getItemAmount($scope.numItems));



})
