(function(){$(this).ready(function(){return $("[data-hook=adjustments_new_coupon_code] #add_coupon_code").click(function(){return 0!==$("#coupon_code").val().length?$.ajax({type:"PUT",url:Spree.url(Spree.routes.apply_coupon_code(order_number)),data:{coupon_code:$("#coupon_code").val()},success:function(){return window.location.reload()},error:function(o){return o.responseJSON.error?show_flash("error",o.responseJSON.error):show_flash("error","There was a problem adding this coupon code.")}}):void 0})})}).call(this);