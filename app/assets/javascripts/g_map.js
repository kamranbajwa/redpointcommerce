var geocoder= new google.maps.Geocoder();

var add
var latitude
var longitude
function setAddress(comp_address){
  add = comp_address;
geocoder.geocode( { 'address': add }, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
     latitude = results[0].geometry.location.lat();
     longitude = results[0].geometry.location.lng();
  } 
});
} 
  function initialize() {
   var myLatlng = new google.maps.LatLng(latitude ,longitude);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'RPC headQuerater!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function() {
$('#contact_us').submit(function(){
    window.location.reload(true);
    $('.alert-success').removeClass('hide');
     setTimeout(function() {
    $('.alert-success').hide();
    }, 3000);
})
});