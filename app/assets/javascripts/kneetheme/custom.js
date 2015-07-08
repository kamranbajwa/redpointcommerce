 $(document).ready(function(){


 $('#widget_name').change(function(){
    if($(this).val() == "Logo Footer")
    {
      $("#widget-name").val($(this).val());
      $(".on-select").hide();
      $(".on-check").show();
    }
    else
    {
      $(".on-check").hide();
      $(".on-select").show();
      $("#widget-name").prop("readonly", true);
      $("#widget-name").val($(this).val());
    }
  });

  if ( $("#widget-name").val() )
  {
    $("#widget-name").prop("readonly", true);
    if ( $("#widget-name").val()  == "Logo Footer")
    {
      $(".on-edit-logo").show();
    }
    else
    {
      $(".on-edit").show();
    }
  }
  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#slider_image_slider_image").change(function(){
    readURL(this);
  });

  $("#order-click").click(function(){
    $("#order_reset")[0].reset();
    $(".select2-chosen").text("");
  })

  $("#product-click").click(function(){
    $("#product_reset")[0].reset();
  })

  $("#promotion-click").click(function(){
    $("#promotion_reset")[0].reset();
    $(".select2-chosen").text("");
  })

  $("#user-click").click(function(){
    $("#user_reset")[0].reset();
  })

 });