$(document).ready(function(){
	$(function() { 
  		$('.filter-fix input[type="checkbox"]').bind('click',function() 
  		{
  			$('input[type="checkbox"]').not(this).prop("checked", false);
  		});
	});

});