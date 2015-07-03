$(document).ready(function(){
    $("#datepicker").datepicker({
  forceParse: false,
  autoclose: true

});
  $('#myformcart').submit(function(){
    $("#myModal").hide();
    $(".a-unique-class").html(" ");
    $('.alert-success').show();
     setTimeout(function() {
    $('.alert-success').hide();
    }, 3000);
  });

  $(".add_to_cart").click(function(){
      $("#myModal").show();
    });
});

