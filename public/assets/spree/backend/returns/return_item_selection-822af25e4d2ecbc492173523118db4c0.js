$(document).ready(function(){function n(){$(this).closest("tr").find("input.add-item").attr("checked","checked"),t()}function t(){var n=0,t=e.find("input.add-item:checked");$.each(t,function(t,e){n+=parseFloat($(e).parents("tr").find(".refund-amount-input").val())});var i=isNaN(n)?"":n.toFixed(2);e.find("span#total_pre_tax_refund").html(i)}var e=$("[data-hook='admin_customer_return_form_fields'],                      [data-hook='admin_return_authorization_form_fields']");e.length>0&&(t(),e.find("input#select-all").on("change",function(n){var e=$(n.currentTarget).parents("table:first").find("input.add-item");e.prop("checked",this.checked),t()}),e.find("input.add-item").on("change",t),e.find(".refund-amount-input").on("keyup",t),e.find("input, select").not(".add-item").on("change",n))});