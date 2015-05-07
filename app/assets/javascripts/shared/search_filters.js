$(document).ready(function(){
	$(function() { 
  		$('input[type="checkbox"]').bind('click',function() 
  		{
  			$('input[type="checkbox"]').not(this).prop("checked", false);
  		});
	});

});