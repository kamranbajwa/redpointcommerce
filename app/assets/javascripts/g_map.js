var geocoder;
       var map;
       var markersArray = [];
        var locationsArray=[]
      

   function initialize() 
    {
        geocoder = new google.maps.Geocoder();

    latlang = geocoder.geocode( { 

           'address': 'Islmabad, Pakistan'},                                             

            function(results, status) 
    {  

         if (status == google.maps.GeocoderStatus.OK) 
           {
              map.setCenter(results[0].geometry.location);
              marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            markersArray.push(marker);

             }
             else
           {
               alert("Geocode was not successful for the following reason: " + status);
                       }
           });

          var myOptions = 
          {
                      center: latlang, zoom: 5, 
          mapTypeId: google.maps.MapTypeId.SATELLITE,
                      navigationControlOptions: 
          {
                   style: google.maps.NavigationControlStyle.SMALL
                      }
                      };
          map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
                     plotMarkers();
                    }
        function setAddress(address){
          console.log('aa'+address.replace(/&quot;/g, '"'));
        
          locationsArray=address.replace(/&quot;/g, '"');
          console.log([locationsArray])
          locationsArray = [locationsArray]
          console.log('loc+aftre'+locationsArray)
         }
         console.log(locationsArray[0])
        function plotMarkers(){
          for(var i = 0; i < locationsArray.length; i++){
            codeAddresses(locationsArray[i]);
          }
        }

         function codeAddresses(address){
         geocoder.geocode( { 'address': address}, function(results, status) { 
         if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
            });
        markersArray.push(marker); 
        }
        else{
        alert("Geocode was not successful for the following reason: " + status);
        }
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