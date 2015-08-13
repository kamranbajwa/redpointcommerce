 function section_name_update(th, section_id){
  $.ajax({
      url: "/admin/sections/update_section_name",
       type: "PATCH",
        data: {id: section_id, section_name: th.value},
      success: function(data){
          location.reload(true);    
        
      },
      error: function(data){
       console.log(data)
      }
      
        });
}
 $(document).ready(function(){
 $('.inline-name').click(function(){
    $('.show_section').show();
    $('.hide_section').hide();
    $(this).find($('.show_section')).hide();
     $(this).find($('.hide_section')).show();

   }); //click end

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

  $("#reset-colors").click(function(e){
    e.preventDefault();
    $(".form-control").val("");
  });
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
   $(".select_page_order").change ( function () {
  var current_class = $(this)
  var old_val=current_class.parent().parent().find('.sort_text').text()
  var page_order=$(this).find(":selected").val()
  var id =$(this).parent('td').attr('id')
   $.ajax({
      url: "/admin/cms_pages/update_page_order",
       type: "PATCH",
        data: {id: id, page_order: page_order},
      success: function(data){
        console.log(data)
        if (data === 'both updated'){
          location.reload(true);
        }
          else if (data=="single updated") {
         current_class.parent().parent().find('.sort_text').text(page_order)
       }
      },
      error: function(data){
       current_class.parent().parent().find('.sort_text').text(old_val)
      }
      
        });
});

 });
