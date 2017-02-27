/*function initMap() {
    console.log('initializing map'); 
    var uf = {lat: 29.6436, lng: -82.3549};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uf
    });
}*/

function initMap() {
        /*var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 29.6436, lng: -82.3549},
          zoom: 10
        });
        var infoWindow = new google.maps.InfoWindow({map: map});*/

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            /*var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };*/
            var myLatLng = {
            	lat: position.coords.latitude,
              	lng: position.coords.longitude
            };
            var map = new google.maps.Map(document.getElementById('map'), {
          		zoom: 10,
          		center: myLatLng
        	});
        	map.setCenter(myLatLng);
            var marker = new google.maps.Marker({
	          position: myLatLng,
	          map: map,
	          title: 'My Location'
	        });
           

            /*infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);*/
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
	resize(); 
});

function resize(){
	console.log('resizing map'); 	
    google.maps.event.trigger(map, 'resize');
}

//source: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
//source: https://developers.google.com/maps/documentation/javascript/geolocation