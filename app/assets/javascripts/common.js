/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Ajax calling for email subscription

function subcribe_email()
{
    var email = document.getElementById('blogaddress').value;
    var rex =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email == "")
    {
      document.getElementById('blogaddress').style.borderColor="red";
    }
    else if(!rex.test(email))
    {
      document.getElementById('error_message').innerHTML = 'Please Enter Correct Email';
      document.getElementById('blogaddress').style.borderColor="red";
    }
    else
    {    
        $.ajax({
             type: "POST",
             data: "email="+ email,
             url: "/subcription",
             success: function(data){
                 if (data ==='insert')
                 {
                     document.getElementById('blog_error').innerHTML = 'Subcribed Successfully';
                     $('#blogaddress').hide();
                     $('#blog-sumit').hide();
                     $('#error_message').hide();
                 }
                 else if (data ==='notinsert'){
                     document.getElementById('blog_error').innerHTML = 'Error occure while subcribe';
                 }
                 else if (data ==='blank'){
                    document.getElementById('blog_error').innerHTML = 'Email Field Empty';
                  }
                 else if (data ==='already'){
                    document.getElementById('error_message').innerHTML = 'Email Already Taken';
                 }
             }
       });
    }
      
}

$(document).ready(function(){
   var selected_radio_buton= $("input[type='radio'][name='subscription']:checked").val()
    show_field_for_selected_radio(selected_radio_buton)
  $("input[type='radio'][name='subscription']").click(function(e) { 
      var bt_val=$(this).val();
      show_field_for_selected_radio(bt_val)
     
    });
  function show_field_for_selected_radio(checked_val){
     if (checked_val=="weekly"){
        $('.daily').hide();
        $('.monthly').hide();
        $('.yearly').hide();
        $('.weekly').show();
       }
       else if(checked_val=="monthly"){
          $('.weekly').hide();
          $('.daily').hide();
          $('.monthly').show();
          $('.yearly').hide();
       } 
       else if(checked_val=="daily"){
          $('.weekly').hide();
          $('.yearly').hide();
          $('.monthly').hide();
          $('.daily').show();
       }
       else if(checked_val=="yearly"){
          $('.weekly').hide();
          $('.daily').hide();
          $('.monthly').hide();
          $('.yearly').show();
       }
  }
    $("#datepicker").datepicker({
  forceParse: false,
  autoclose: true,
  startDate: new Date() 

});
    $("#sub_id").click(function(){
         $("#style_selector_1").hide();
        $("#blg-3").slideDown();
       
    });
    
      $("#blg_2").click(function(){
        $("#blg-3").slideUp('slow');
       
        $("#style_selector_1").slideUp().delay( 180 ).fadeIn( 600 );
    });
    });
/** @Facebook
*************************************************** **/
    /*
        https://developers.facebook.com/docs/plugins/like-button/

        ADD TO YOUR CODE (just change data-href, that's all):

        <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
    */
    if(jQuery("div.fb-like").length > 0) {

        jQuery('body').append('<div id="fb-root"></div>');

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

/** @Google Plus
*************************************************** **/
    /*
        https://developers.google.com/+/web/+1button/

        <!-- Place this tag where you want the +1 button to render. -->
        <div class="g-plusone" data-size="medium" data-annotation="inline" data-width="300"></div>
    */
    if(jQuery("div.g-plusone").length > 0) {

        (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/platform.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();

    }

/** @Twitter
*************************************************** **/
    /*
        https://dev.twitter.com/docs/tweet-button

        <!-- Place this tag where you want the twitter button to render. -->
        <a href="https://twitter.com/share" class="twitter-share-button" data-lang="en">Tweet</a>
    */
    if(jQuery("a.twitter-share-button").length > 0) {

        !function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0];
            if(!d.getElementById(id)){js=d.createElement(s);
            js.id=id;js.src="https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);}
        }(document,"script","twitter-wjs");

    }
    