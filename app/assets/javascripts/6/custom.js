/* Custom Scripts */

/* Document Ready Starts */
$(document).ready(function(){

  // ADD SLIDEDOWN ANIMATION TO DROPDOWN ////////////////////////////////////////////////////////////////////////////////
//  $('.dropdown').on('show.bs.dropdown', function(e){
//    $(this).find('.dropdown-menu').first().stop(true, true).slideDown("slow");
//  });
  // ADD SLIDEUP ANIMATION TO DROPDOWN //
//  $('.dropdown').on('hide.bs.dropdown', function(e){
//    $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
//  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});
/* Document Ready Ends */

/* Window.Load Starts */
$(window).load(function() { 
// FlexiSlider Starts
 $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
  
 $('.flexslider').flexslider({
    animation: "slide"
  });  
  
// FlexiSlider Ends
});
/* Window.Load Ends */