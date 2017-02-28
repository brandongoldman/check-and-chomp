function initMap() {
    console.log('initializing map');
    var uf = {lat: 29.6436, lng: -82.3549};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uf
    });
}

// $('.tableRows').click(function(){
// 	$(this).closest('tr').next('.expandedInformation').toggle();
//
// });
