function remove_fields_o(e){$(e).prev("input[type=hidden]").val("1"),$(e).closest(".org_addresses").hide(),$(e).closest(".org_addresses").find(".fullwidth").prop("required",!1)}function add_fields_o(e,d,r){var s=(new Date).getTime(),i=new RegExp("new_"+d,"g");$(e).parent().before(r.replace(i,s))}