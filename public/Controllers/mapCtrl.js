var cities = [
    {
        city : 'Dan The Band Man',
        desc : '1383s 1470e Provo Ut, 84606',
        lat : 40.215127,
        long : -111.632327,
        hours : '8AM-11PM',
    }
  ];


angular.module('bandApp').controller('mapCtrl', function($scope){

      var mapOptions = {
          zoom: 11,
          center: new google.maps.LatLng(40.215127, -111.632327),
          mapTypeId: google.maps.MapTypeId.MAP
      }

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      $scope.markers = [];

      var infoWindow = new google.maps.InfoWindow();

      var createMarker = function (info){

          var marker = new google.maps.Marker({
              map: $scope.map,
              position: new google.maps.LatLng(info.lat, info.long),
              title: info.city,
              description: info.desc,
          });
          marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

          google.maps.event.addListener(marker, 'click', function(){
              infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content + info.hours);
              infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);

      }

      for (i = 0; i < cities.length; i++){
          createMarker(cities[i]);
      }

      $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
          $scope.picSelector = selectedMarker.pics;
            }

  })
