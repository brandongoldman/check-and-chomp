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

function resize(){
	console.log('resizing map');
    google.maps.event.trigger(map, 'resize');
}

//source: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
//source: https://developers.google.com/maps/documentation/javascript/geolocation

$.getJSON("regularHours.json", function(data) {
  console.log(data);
  var index = 0;
  $.each(data, function (key, val) {
    console.log(val._id);
    var content1 = "<tr class=\"tableRows\"> <td class=\"col-md-4\" id=\"" + val._id + "\"><img src=\"locationLogos/chickfilaLogo.jpeg\" alt=\"Chickfila Logo\" class=\"logos\"><p class=\"miles\">0.8 miles</p></td> <td class=\"locationPreview\"> <h3 class=\"locationName\">" + val._id + "</h3> <h4 class=\"openTill\">Open till 7pm</h4> <center><i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></center> </td> </tr> <tr class=\"expandedInformation\"> <td class=\"col-md-4 weeklyHours\"> <h5 class=\"hoursHeading\">Weekly Hours</h5><h6 id=\"dynamicHoursLoad" + index + "\"></h6> </td> <td class=\"displayMap\" id=\"map\"> </td> </tr>";
    $("#dynamicRowLoad").append(content1);
    var content2 = "Monday: " + val.Monday + "<br>Tuesday: " + val.Tuesday + "<br>Wednesday: " + val.Wednesday + "<br>Thursday: " + val.Thursday + "<br>Friday: " + val.Friday + "<br>Saturday: " + val.Saturday + "<br>Sunday: " + val.Sunday;
    $("#dynamicHoursLoad" + index).html(content2);
    console.log(content2);
    ++index;
  });
});

$('.tableRows').click(function(){
	$(this).closest('tr').next('.expandedInformation').toggle();
	resize();
});

$('#dynamicRowLoad').on('click', '.tableRows', function() {
 $(this).closest('tr').next('.expandedInformation').toggle();
 resize();
});
