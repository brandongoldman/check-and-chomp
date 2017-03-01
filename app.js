var myLatLng;

function initMilesAway(myLatLng){
  console.log('initializing miles away'); 

  //would need to traverse the table list to get the distance for each set of points. 
  //In this case, I will just test it with one set right now. 

  var point1 = {lat:29.647109, lng:-82.341467};
  console.log(myLatLng);
  var distance = getDistance(myLatLng, point1); 
  console.log(distance); 
  document.getElementById('theMiles').innerHTML = distance + ' miles'; 

}

var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  d = d*0.000621371192;
  d = parseFloat(d).toFixed(2);
  return d;  // returns the distance in miles
};

function onPageLoad(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(sendLocation);
      
    } else {
    alert("Geolocation is not supported by this browser.");
    }
}

function myMap(){
 /*just leave this blank function here.
 The googlemaps api calls this one automatically on page load. 
 Initially it called initMap, but that was doing things that 
 I didn't want it to do right away, so we need this blank function here*/
}

function sendLocation(position){
  var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
  initMilesAway(myLatLng);
}

function initMap(theLat, theLong) {
  // Try HTML5 geolocation.
  var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
  var bounds = new google.maps.LatLngBounds(); 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatLng = {
      	lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('myLatLng is:');
      console.log(myLatLng);

      
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
//source: http://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3