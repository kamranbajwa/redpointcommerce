function remove_fields_o(link,f) {
$(link).prev("input[type=hidden]").val("1");
$(link).closest(".org_addresses").hide();
$(link).closest(".org_addresses").find('.fullwidth').prop('required', false); 
}
function add_fields_o(link, association, content) {  
    var new_id = new Date().getTime();  
    var regexp = new RegExp("new_" + association, "g");  
    $(link).parent().before(content.replace(regexp, new_id));  
}