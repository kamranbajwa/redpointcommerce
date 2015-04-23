$(function(){


'use strict';

/* ==============================================
Detect Mobile Devices
=============================================== */
var detectmob = false; 

    if(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {  

            detectmob = true;

    }


/* ==============================================
Ajax Contact Form
=============================================== */
$('#contact-form').submit(function(e){

  e.preventDefault();

  $(document).ajaxStart(function(){

    $('.contact-output').html('<p>Sending</p>');

  });

  $.ajax({

    url:'contactform.php',
    type:'post',
    data:$('#contact-form').serialize(),
    success:function(){

      $('.contact-output').html('<p class="contact-success">Your message was sent successfully</p>');

    },
    error:function(){

      $('.contact-output').html('<p class="contact-error">Failed to send your message</p>');

    }


  });

});



/* ==============================================
Page Animations
=============================================== */
$('.animated').waypoint(function(){

var elem = $(this);

    var animation = elem.data('animation');

    if ( !elem.hasClass('visible') ) {

      var animationDelay = elem.data('animation-delay');

      if ( animationDelay ) {

        setTimeout(function(){

          elem.addClass( animation + " visible" );

        }, animationDelay);

      } else {

        elem.addClass( animation + " visible" );

      }

    }

},{triggerOnce:true,offset: function() {

    return $(window).height()-100;

  }});

$('.blog-single-article, .free-content').find('img').addClass('animated');

  $('.blog-single-article, .free-content').find('img').waypoint(function(){

      $(this).delay(200).addClass('visible fadeIn');

  },{triggerOnce:true,offset: function() {

    return $(window).height()-200;

  }});

  





/* ==============================================
 Element Animations
=============================================== */ 
/* Menu */
function fixed_menu(){

  var windowWidth=$(window).width();

  var windowPos=$(window).scrollTop();

    if(windowPos>150 && windowWidth>992){

      $('.fixed-header').fadeIn(300);

    }else{

      $('.fixed-header').slideUp(100);

    }

}


fixed_menu();

$(window).scroll(fixed_menu);
$(window).resize(fixed_menu);



/* Sticky Menu */
$('.search-slip').find('.fa').click(function(){

  $('.search-slip').find('input').delay(100).fadeIn(0).animate({
    width:'100px'
  },100);

  $(this).fadeOut(100);

});


$('body').click(function(){

  $('.search-slip').find('input').animate({
    width:0
  },100).fadeOut(10);

  $('.search-slip').find('.fa').fadeIn();

});


$('.search-slip').find('input').click(function(e){

  e.stopPropagation();

});

$('.search-slip').find('.fa').click(function(e){

  e.stopPropagation();

});






/* Scrolling */
if($('.section-quote').length){

  var sectionQuote=$('.section-quote').offset().top;

  $(window).resize(function(){

    sectionQuote=$('.section-quote').offset().top;

  });


  $('.scrolling-btn').click(function(){

    $('body').animate({scrollTop:sectionQuote+12},600);

  });

}




/* Header Banner Height */
var windowHeight=$(window).height();

$('.front-header').css({

  height:windowHeight+'px'

});



$(window).resize(function(){

  var windowHeight=$(window).height();

  $('.front-header').css({

    height:windowHeight+'px'

  });



});


/* Top Texts */
function top_headline(){

  if($(window).width()>992){

    var topheadline=$('.top-headline').height();

    $('.front-header').find('.top-headline').css({

      marginTop:-topheadline/2+'px',
      position:'absolute',
      top:'45%'

    });

  }else{

    $('.front-header').find('.top-headline').css({
      marginTop:'30px',
      position:'relative',
      top:0
    });

    $('.blog-single-header').find('.top-headline').css({

      marginTop:'100px'

    });

  }

}

top_headline();

$(window).resize(top_headline);




/* ==============================================
Drop-down Menu
=============================================== */
$('.blog-header,.front-header,.fixed-header').find('.nav li').hover(function(){

 $(this).find('ul').stop().fadeIn(300); 

 $(this).find('ul').siblings('a').css('borderBottom','2px solid #ff9000');



},function(){

  $(this).find('ul').stop().fadeOut(300); 

  $(this).find('ul').siblings('a').css('borderBottom','2px solid transparent');


});



/* ==============================================
Accordion
=============================================== */
$('.panel-title').find('a').click(function(e){

    $('.panel-title').find('a').parent('h6').removeClass('panel-active');

    $(this).parent('h6').addClass('panel-active');

    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
        e.stopPropagation();
        e.preventDefault();
    }

});


/* ==============================================
Masonry
=============================================== */
var postContainer=$('.post-loop-wrap');
var itemContainer=$('.masonry-layout');

var mwindow=$(window);

postContainer.imagesLoaded( function() {

 postContainer.masonry({
    columnWidth: '.col-sm-6.col-md-4',
    gutterWidth: 30
  }); 

});






/* ==============================================
Parallax
=============================================== */
if (detectmob != true) {

    $( '.front-header' ).parallax('50%',0.3,true);
    $( '.section-features' ).parallax('50%',0.4,false);
    $( '.section-counter' ).parallax('50%',0.4,false);
    $( '.section-card' ).parallax('50%',0.4,false);
    $( '.blog-header' ).parallax('50%',0.5,true);
    $( '.blog-single-header' ).parallax('50%',0.3,true);      

}



/* ==============================================
Top Elements Fading
=============================================== */
function element_fading(){

    var top=$(window).scrollTop();
    var wrap=$('.front-header,.blog-header .top-headline');
    var title=$('.front-header,.blog-header .top-headline').find('h1');
    var desc=$('.front-header,.blog-header .top-headline').find('.description');
    var separator=$('.front-header,.blog-header .top-headline').find('.separator');
    var button=$('.front-header').find('.detail-button');

    wrap.css('position','relative');
    title.css('position','relative');
    desc.css('position','relative');
    separator.css('position','relative');
    button.css('position','relative');


      if($(window).width()>992){

          title.animate({ 

            top:(top/6)+'px',
            opacity:1-top/260

          },0);

          desc.animate({

              top:(top/1.5)+'px',
              opacity:.7-top/350

           },0);
          
          separator.animate({

               top:top/2,            
               opacity:1-top/400          

           },0);

          button.animate({

              top:top/2,
              opacity:1-top/300

          },0);

      }

}


$(window).scroll(element_fading);
$(window).resize(element_fading);




/* ==============================================
About Blog Content
=============================================== */
$('.dropdown-trigger').hover(function(){

    $(this).siblings('ul').stop().fadeToggle('fast');

});

$('.dropdown-trigger').siblings('ul').hover(function(){

    $(this).stop().fadeToggle('fast');

});




/* ==============================================
Isotope
=============================================== */
$('.isotope-container').imagesLoaded( function() {  

   var $container = $('.isotope-container').isotope({
    transitionDuration: '.6s',
    masonry: {
        columnWidth: '.col-sm-6.col-md-4.col-lg-3'
      }
  });

  $('.filter-group').find('a').click(function(){

      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });

  });

});







/* ==============================================
Gallery
=============================================== */
$('.zoom-gallery').magnificPopup({

    delegate: '.image-zoom',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    navigateByImgClick: false,


    mainClass: 'mfp-with-zoom mfp-img-mobile',         
       gallery: {
        enabled: true
      },

      image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.siblings('img');
        }
    },
    callbacks: {

        markupParse      : function (template, values, item) {
        template.find('.desc').html('');
        var $desc = item.el.data("desc");       
                           
        template.find('.desc').append($desc);                            

        },


    }
      
});

$('.isotope-container').find('.isotope-single').hover(function(){

    $(this).children('img').stop().animate({
        opacity:'.3'
    },200);


    $(this).find('.image-zoom').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);


},function(){

    $(this).children('img').stop().animate({
        opacity:'1'
    },200);

    $(this).find('.image-zoom').stop().animate({

        marginTop:'-40px',
        opacity:0

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:0,
        opacity:0

    },200);

});



$('.filter-inner').find('a').click(function(){

    $('.filter-inner').find('a').removeClass('default');
    $(this).addClass('default');

});



/* ==============================================
Number Counter
=============================================== */
$('.section-counter').find('.counter-number').counterUp({
            delay: 10,
            time: 1000
        });


/* ==============================================
Team Slider
=============================================== */
$('.team-img-inner').freetile();
  
$('.teamslider-wrap').teamslider();




/* ==============================================
Timeline Calling
=============================================== */
if($('.section-history').length){

  $('#timeline').timelinr({
        orientation:  'vertical',
        issuesSpeed:  250,
        datesSpeed:   100,
        startAt:    1
  });

}



/* ==============================================
Vertical Slider
=============================================== */
 $('.vertical').verticalSlider();




/* ==============================================
Gallery Big Button
=============================================== */
  $('.gallery-inner-span').hover(function(){

    $('.gallery-inner-button').css('outline-color','white');
    $('.border-line-two').css('borderColor','white');

  },function(){

    $('.gallery-inner-button').css('outline','5px solid rgba(190,190,190,.3)');   
    $('.border-line-two') .css('borderColor','#3a5386');

  });



/* ==============================================
Blog Post Slider
=============================================== */
var postSlider = new Swiper('.blog-post-slider',{

  loop:true,
  speed:500

});

$('.post-slider-left').on('click', function(e){
    e.preventDefault()
    postSlider.swipePrev()
});

$('.post-slider-right').on('click', function(e){
    e.preventDefault()
    postSlider.swipeNext()
});


var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });



$(window).resize(function(){

  var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });


});



$('.swiper-slide,.post-slider-right,.post-slider-left').click(function(){

  var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });

});


/* ==============================================
Video
=============================================== */
$(".player").mb_YTPlayer();

$('.player-icon').click(function(){
  $('.player').playYTP();
});


$('.player').on("YTPStart",function(){   
  $('.video-text-wrap').fadeOut();
});


$('.player').on("YTPPause YTPEnd",function(){   
  $('.video-text-wrap').fadeIn();
});


/* ==============================================
Gallery Inner
=============================================== */
$('.zoom-gallery').magnificPopup({

    delegate: '.image-zoom',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    navigateByImgClick: false,


    mainClass: 'mfp-with-zoom mfp-img-mobile',         
       gallery: {
        enabled: true
      },

      image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.siblings('img');
        }
    },
    callbacks: {

        markupParse      : function (template, values, item) {
        template.find('.desc').html('');
        var $desc = item.el.data("desc");       
                           
        template.find('.desc').append($desc);                            

        },


    }
      
});

$('.isotope-container').find('.isotope-single').hover(function(){

    $(this).children('img').stop().animate({
        opacity:'.3'
    },200);


    $(this).find('.image-zoom').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);


},function(){

    $(this).children('img').stop().animate({
        opacity:'1'
    },200);

    $(this).find('.image-zoom').stop().animate({

        marginTop:'-40px',
        opacity:0

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:0,
        opacity:0

    },200);

});



$('.filter-inner').find('a').click(function(){

    $('.filter-inner').find('a').removeClass('default');
    $(this).addClass('default');

});


/* ==============================================
Cross Browser
=============================================== */
/* IE */
if($.browser.msie){

  /* All IE */
  $('input[type="text"],input[type="email"]').addClass('padding-bottom');

  /* IE 10 */
  if($.browser.version==10){

    $('.gallery-inner-span').addClass('padding-left');

    $('.section-gallery-inner .filter-inner').find('a').addClass('padding-top');

  }

  /* IE 9 */
  if($.browser.version==9){

    $('.gallery-inner-span').addClass('padding-left');

    $('.section-gallery-inner .filter-inner').find('a').addClass('padding-top');

    $('input[type="text"]').val('Name');

    $('input[type="text"]').focus(function(){

      if($(this).val()=='Name'){

        $(this).val('');

      }

    });



    $('input[type="email"]').val('Email');

    $('input[type="email"]').focus(function(){

      if($(this).val()=='Email'){

        $(this).val('');

      }

    });


    $('textarea').val('Message');

    $('textarea').focus(function(){

      if($(this).val()=='Message'){

        $(this).val('');

      }

    });

  } 


}


/* Fittext */
$('h1').fitText(1.4, { minFontSize: '19px', maxFontSize: '50px' });

$('h2').fitText(1, { minFontSize: '17px', maxFontSize: '40px' });

$('h3').fitText(1, { minFontSize: '15px', maxFontSize: '30px' });

$('.section-items .h-product').find('.p-name').fitText(1, { minFontSize: '13px', maxFontSize: '20px' });

$('.h-product').find('.p-category').fitText(1, { minFontSize: '12px', maxFontSize: '15px' });





/* Responsive */
$('.menu-open').click(function(){

  $('.mobile-menu-wrap').slideDown(200);

});


$('.menu-close').click(function(){

  $('.mobile-menu-wrap').slideUp(200);

});



$('.mobile-menu-wrap').find('a').click(function(){

  $('.mobile-menu-wrap').slideUp(200);

});


$('.mobile-isotope').click(function(){

  $('.filter-inner').slideToggle(200);

  $('.filter-inner').find('a').click(function(){

    $('.filter-inner').slideUp(200);

  });

});


function mobile_menu(){

  if($(window).width()>992){
    $('.mobile-menu-wrap').css('display','none');
  }

}

mobile_menu();
$(window).resize(mobile_menu);




/* ==============================================
Datepicker
=============================================== */
$( "#datepicker" ).datepicker({
  inline: true
});


/* ==============================================
Range Slider
=============================================== */
$( "#range-slider" ).slider({
  range: true,
  min:0,
  max:50,
  values: [ 10, 30 ],
  slide: function( event, ui ) {
        $( "#range-amount-1" ).text( "$" + ui.values[ 0 ]);
        $( "#range-amount-2" ).text( "$" + ui.values[ 1 ]);
      }
  
});

 $( "#range-amount-1" ).text( "$" + $( "#range-slider" ).slider( "values", 0 ) );
 $( "#range-amount-2" ).text( "$" + $( "#range-slider" ).slider( "values", 1 ) );




/* ==============================================
Items
=============================================== */
$('.minus-icon').click(function(){

  var qty=$(this).siblings('.quantity').text();

  qty--;

  if(qty<1){
    qty=1;
  }

  $(this).siblings('.quantity').text(qty);

});


$('.plus-icon').click(function(){

  var qty=$(this).siblings('.quantity').text();

  qty++;

  $(this).siblings('.quantity').text(qty);

});


/* Single Item */
var price=$('.items-single').find('.p-price').text();

$('.items-single .quantity-wrap').find('.plus-icon').click(function(){

  var single_qty=$('.quantity').text();

  

  var result=single_qty*price;

  $('.items-single').find('.p-price').text(result.toFixed(2));

});



$('.items-single .quantity-wrap').find('.minus-icon').click(function(){

  var single_qty=$('.quantity').text();

  

  var result=single_qty*price;

  $('.items-single').find('.p-price').text(result.toFixed(2));

});







var items=$('.section-items').find('.h-product');

if(detectmob!=true){

  itemContainer.imagesLoaded( function() {

    $('.masonry-layout').masonry({
      columnWidth:'.h-product'
    });

  });



  

  $('.section-items').find('.h-product').hover(function(){

    $(this).children('.quantity-buy').stop().fadeToggle(200);

    $(this).stop().toggleClass('items-scale');

  });

}else{

  $('.section-items').find('.quantity-buy').css('display','block');

}



$('.rate-star').eq(4).prevAll().addClass('rate-star-active'); // You can DELETE!!!! this line.


$('.rate-star').click(function(){

  $(this).prevAll().andSelf().addClass('rate-star-active');
  $(this).nextAll().removeClass('rate-star-active');

});



/* ==============================================
Map Calling
=============================================== */
 function initialize() {

  var mapCanvas = document.getElementById('map_canvas');

  var myLocation = new google.maps.LatLng(39.9177, 32.8560);

  var mapOptions = {
    center: myLocation,
    zoom: 15,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl:false
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: myLocation,
      map: map,
      icon: 'img/marker.png'
  });


    map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { color: '#e4d4b4' },
      { weight: 1 }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { saturation: 1 },
      { invert_lightness: false }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffff00' },
      { gamma: 1.4 },
      { saturation: 82 },
      { lightness: 96 }
    ]
  }, {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      { hue: '##21366c' },
     
    ]
  }
]);    


}


if($('.section-map').length){

  google.maps.event.addDomListener(window, 'load', initialize);
  
}


/* ==============================================
Page Loader
=============================================== */
$(document).imagesLoaded(function(){

  $('.page-loader').find('img').fadeOut(300);
$('.page-loader').delay(100).fadeOut(500);

});






/* ==============================================
Safari Fix
=============================================== */
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){

  $('.fixed-header').find('.col-sm-7').css({

    paddingBottom:'1px'

  });

}




});