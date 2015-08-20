$(document).ready(function () {
  //place above code here
    var unsaved = false;
  $("input,input[type='checkbox'],select ").change(function(){ //trigers change in all input fields including text type
  unsaved = true;
});

function unloadPage(){ 
    if(unsaved){
      return "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";
    }
}
window.onbeforeunload = unloadPage;
$(":submit").live('click', function() {
    unsaved = false;
});
});