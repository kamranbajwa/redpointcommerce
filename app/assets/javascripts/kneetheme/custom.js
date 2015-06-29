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


 });