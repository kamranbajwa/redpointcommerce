var geocoder;
       var map;
       var markersArray = [];
        var locationsArray=[]


   function initialize() 
    { //console.log(locationsArray)
        geocoder = new google.maps.Geocoder();

    latlang = geocoder.geocode( { 

           'address': locationsArray[0]
         },                                             

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
               //alert("Geocode was not successful for the following reason: " + status);
                       }
           });

          var myOptions = 
          {
            center: latlang, 
            zoom: 3, 
         
          };
          map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
                     plotMarkers();
                    }
        function setAddress(address){
          locationsArray=address.replace(/&quot;/g, '"');
          locationsArray= locationsArray.split(",")
         }
         //console.log(locationsArray[0])
        function plotMarkers(){
          for(var i = 1; i < locationsArray.length; i++){
            //console.log('loop to plot marker')
            codeAddresses(locationsArray[i]);
            //marker.setTitle("aas");
          }
        }


         function codeAddresses(address){
          //console.log('ad'+address)
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
        //alert("Geocode was not successful for the following reason: " + status);
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
