var map;

function initMap(theLat, theLong) {
  // Try HTML5 geolocation.
  console.log(theLat); 
  console.log(theLong);
  var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
  var bounds = new google.maps.LatLngBounds(); 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatLng = {
      	lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(myLatLng);
      
      //var uf = {lat: 29.643362, lng: -82.354855};
      var map = new google.maps.Map(document.getElementById('map'), {
    		zoom: 14,
    		center: myLatLng
  	  });
  	
      var marker1 = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My Location', 
        icon: im
      });
      bounds.extend(marker1.position);
      var location = {lat: theLat, lng: theLong};
      var marker2 = new google.maps.Marker({
        position: location,
        map: map
      });
      bounds.extend(marker2.position); 
      map.fitBounds(bounds); 
     
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}



$('.tableRows').click(function(){
	$(this).closest('tr').next('.expandedInformation').toggle();
  initMap(29.647109, -82.341467); 
});

//source: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
//source: https://developers.google.com/maps/documentation/javascript/geolocation