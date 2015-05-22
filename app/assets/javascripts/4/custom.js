/* Custom Scripts */

/* Document Ready Starts */
$(document).ready(function(){
     $('#myformcart').submit(function(){
    $("#myModal").hide();
    $('.modal-open').css( "overflow", 'auto');
    $(".a-unique-class").html(" ");
    $('.alert-success').show();
     setTimeout(function() {
    $('.alert-success').hide();
    }, 3000);
  })

  $(".add_to_cart").click(function(){
      $("#myModal").show();
    });
// Responsive Menu Initializes
$('.menu-link').click( function(e) { e.preventDefault(); $('#menu').toggle('slide'); });
// Responsive Menu Ends
// Search Box Show Hide Starts
$('.search-container').click( function(e) { e.preventDefault(); $('.search-slide').fadeToggle('slow'); });
// $('.search-container').click( function(e) { e.preventDefault(); $('.search-slide').Toggle('slide'); });
// Search Box Show Hide Ends
// nivoSlider Starts
$('#slider').nivoSlider(); 
// nivoSlider Ends
});
/* Document Ready Ends */

/* Window.Load Starts */
$(window).load(function() { 
// FlexiSlider Starts
 // $('#carousel').flexslider({
 //    animation: "slide",
 //    controlNav: false,
 //    animationLoop: false,
 //    slideshow: false,
 //    itemWidth: 210,
 //    itemMargin: 5,
 //    asNavFor: '#slider'
 //  });
  // $('#slider').flexslider({
  //   animation: "slide",
  //   controlNav: false,
  //   animationLoop: false,
  //   slideshow: false,
  //   sync: "#carousel"
  // });
// FlexiSlider Ends
});
/* Window.Load Ends */

