var myLatLng;

function initMilesAway(locationLat, locationLong, index){
  //point is should be the dining location coordinates
  var point1 = {lat:locationLat, lng:locationLong};
  var distance = getDistance(myLatLng, point1); 
  document.getElementById('theMiles' + index).innerHTML = distance + ' miles'; 
  return distance; 
}

var rad = function(x) {
  return x * Math.PI / 180;
};

//function to get the distance between user and location 
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

//when the page loads, ask for user permission for using location
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
  myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
  loadTheTable(); 
}

function initMap(theLat, theLong, index) {
  //blue circle is for user's location
  var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
  var bounds = new google.maps.LatLngBounds(); 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatLng = {
      	lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      //initialize the map
      var map = new google.maps.Map(document.getElementById('map' + index), {
    		zoom: 14,
    		center: myLatLng
  	  });
  	
      //add a marker for the user's location 
      var marker1 = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My Location', 
        icon: im
      });

      bounds.extend(marker1.position);

      //add a marker for the dining location
      var location = {lat: theLat, lng: theLong};
      var marker2 = new google.maps.Marker({
        position: location,
        map: map
      });

      //fit the map to show both user location and dining location
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

function loadTheTable(){
  $.getJSON("regularHours.json", function(data) {
    var index = 0;
    $.each(data, function (key, val) {
      var content1 = "<tr class=\"tableRows\" id=\"tableRow" + index + "\"> <td class=\"col-md-4\" id=\"" + val._id + "\"><img src=\"" + val.logoLocation + "\" alt=\"" + val._id + " Logo\" class=\"logos\" id=\"theLogo" + index + "\"><p class=\"miles\" id=\"theMiles" + index + "\"></p></td> <td class=\"locationPreview\"> <h3 class=\"locationName\">" + val._id + "</h3> <h4 class=\"openTill\" id=\"openTill" + index + "\"></h4> <center><i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></center> </td> </tr> <tr class=\"expandedInformation\"> <td class=\"col-md-4 weeklyHours\"> <h5 class=\"hoursHeading\">Weekly Hours</h5><h6 id=\"dynamicHoursLoad" + index + "\"></h6> </td> <td class=\"displayMap\" id=\"map" + index + "\"> </td> </tr>";  
      $("#dynamicRowLoad").append(content1);
      console.log('------' + val._id + '------'); 
      //get information about whether the location is closed or open and the 'open till' description if location is open  
      getDateTimeInfo(); 
      var closed = false; 
      var dateString; 
      switch(day){
        case 0: dateString = val.Sunday; break;
        case 1: dateString = val.Monday; break;
        case 2: dateString = val.Tuesday; break;
        case 3: dateString = val.Wednesday; break;
        case 4: dateString = val.Thursday; break;
        case 5: dateString = val.Friday; break;
        case 6: dateString = val.Saturday; break;
      }
      if(dateString === "CLOSED"){
        document.getElementById('openTill' + index).innerHTML = "Closed now";
        closed = true; 
        //add code here to make the listing greyed out/disabled
      }
      else if(dateString === "24 HOURS"){
        document.getElementById('openTill' + index).innerHTML = "24 Hours";
      }
      else{
        //need to further parse the dateString; 
        var displayLocClosing;
        var locClosHr; 
        var locClosMin; 
        var locOpenHr;
        var locOpenMin; 
        var splitForTime = dateString.split("&#45; ");
        displayLocClosing = splitForTime[1];
        var splitStringArray = dateString.split(" ");
        console.log(splitStringArray);
        locClosAmPm = splitStringArray[4];
        locClosHr = splitStringArray[3];
        var getHour = locClosHr.split(":");
        locClosHr = getHour[0];
        locClosMin = getHour[1];
        locClosMin = parseInt(locClosMin); 
        locOpenHr = splitStringArray[0];
        var getOpen = locOpenHr.split(":");
        console.log(getOpen); 
        theLocOpenHr = getOpen[0];
        theLocOpenHr = parseInt(theLocOpenHr); 
        locOpenMin = getOpen[1];
        var theLocClosHr; 
        console.log('locClosHr: ' + locClosHr); 
        switch(locClosHr){
          case '1': 
            if(locClosAmPm === 'AM')
              duration = 
              theLocClosHr = 1; 
            else
              theLocClosHr = 13; 
            break; 
          case '2': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 2; 
            else
              theLocClosHr = 14; 
            break;
          case '3': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 3; 
            else
              theLocClosHr = 15; 
            break;
          case '4': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 4; 
            else
              theLocClosHr = 16; 
            break;
          case '5': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 5; 
            else
              theLocClosHr = 17; 
            break;
          case '6': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 6; 
            else
              theLocClosHr = 18; 
            break;
          case '7': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 7; 
            else
              theLocClosHr = 19; 
            break;
          case '8': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 8; 
            else
              theLocClosHr = 20; 
            break;
          case '9': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 9; 
            else
              theLocClosHr = 21; 
            break;
          case '10': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 10; 
            else
              theLocClosHr = 22; 
            break;
          case '11': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 11; 
            else
              theLocClosHr = 23; 
            break;
          case '12': 
            if(locClosAmPm === 'AM')
              theLocClosHr = 0; 
            else
              theLocClosHr = 12; 
            break;
        }
        console.log(typeof theLocClosHr);
        console.log('theLocClosHr: ' + theLocClosHr); 
        console.log(typeof theLocOpenHr); 
        console.log('theLocOpenHr: ' + theLocOpenHr); 
        console.log('locClosAmPm: ' + locClosAmPm); 
        locOpenMin = parseInt(locOpenMin); 
        theMinutes = parseInt(theMinutes); 
        console.log(typeof locOpenMin); 
        console.log(typeof theMinutes); 
        console.log('locOpenMin: ' + locOpenMin); 
        if(theHours == theLocOpenHr){
          if(theMinutes < locOpenMin){
            console.log('**one'); 
            document.getElementById('openTill' + index).innerHTML = "Closed now";
            closed = true;
          }
          else{
            console.log('**two'); 
            document.getElementById('openTill' + index).innerHTML = 'Open until ' + displayLocClosing;
          }
        }
        else if(theHours < theLocOpenHr && locClosAmPm === 'AM'){
          if(theHours < theLocClosHr){
            console.log('**three'); 
            document.getElementById('openTill' + index).innerHTML = 'Open until ' + displayLocClosing;
          }
          else if(theHours == theLocClosHr){
            if(theMinutes < locClosMin){
              console.log('**four'); 
              document.getElementById('openTill' + index).innerHTML = 'Open until ' + displayLocClosing;
            }
            else{
              console.log('**five'); 
              document.getElementById('openTill' + index).innerHTML = "Closed now";
              closed = true;
            }
          }
          else{
            console.log('**six'); 
            document.getElementById('openTill' + index).innerHTML = "Closed now";
            closed = true;
          }
        }
        else if(theLocOpenHr < theHours && theHours < theLocClosHr){
          console.log('**seven'); 
          document.getElementById('openTill' + index).innerHTML = 'Open until ' + displayLocClosing;
        }
        else if(theLocOpenHr < theHours && theHours == theLocClosHr){
          if(theMinutes < locClosMin){
            console.log('**eight'); 
            document.getElementById('openTill' + index).innerHTML = 'Open until ' + displayLocClosing;
          }
          else{
            console.log('**nine'); 
            document.getElementById('openTill' + index).innerHTML = "Closed now";
            closed = true;
          }
        }
        else if(theHours > theLocClosHr && locClosAmPm === 'AM'){
          console.log('**ten');
          document.getElementById('openTill' + index).innerHTML = 'Open until ' + displayLocClosing;
        }
        else{
          console.log('**eleven'); 
          document.getElementById('openTill' + index).innerHTML = "Closed now";
          closed = true;
        }
      }

      if(closed === true){
        document.getElementById('tableRow' + index).style = "background-color: rgba(222,222,222, 0.3); color: rgba(185,185,185, 0.9);";
        document.getElementById('openTill' + index).style = "color: red;";
        document.getElementById('theLogo' + index).style = "opacity: 0.4;";
      }

      
      var content2 = "Monday: " + val.Monday + "<br>Tuesday: " + val.Tuesday + "<br>Wednesday: " + val.Wednesday + "<br>Thursday: " + val.Thursday + "<br>Friday: " + val.Friday + "<br>Saturday: " + val.Saturday + "<br>Sunday: " + val.Sunday;
      $("#dynamicHoursLoad" + index).html(content2);
      //pass the coordinates to the function that calculates how far the user is from the location
      theDistance = initMilesAway(val.theLat, val.theLong, index); 
      ++index;
    });
  });
}

$('#dynamicRowLoad').on('click', '.tableRows', function() {
  $(this).closest('tr').next('.expandedInformation').toggle();
  theId = $(this)[0].cells[0].id;

  //load the map when the user clicks on the row. This saves a lot of time instead of loading them all on page load
  //loop through json to get the coordinates and pass them to the initMap function
  $.getJSON("regularHours.json", function(data) {
    var index = 0; 
    $.each(data, function (key, val) {
      if(theId === val._id){
        initMap(val.theLat, val.theLong, index);
      }
      ++index; 
    });
  });
});

var day; 
var amPm; 
var theHours; 
var theMinutes; 

function getDateTimeInfo(){
  var currentDate = new Date(); 
  day = currentDate.getDay();
  theHours = currentDate.getHours();
  minutes = currentDate.getMinutes(); 
  //day = 3; 
  //theHours = 4; 
  //theMinutes = 27; 
  console.log('day is : ' + day); 
  console.log('theHours is : ' + theHours);
  console.log('theMinutes is : ' + minutes);

}


//source: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
//source: https://developers.google.com/maps/documentation/javascript/geolocation
//source: http://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3