$(document).ready(function(){
  
  $('#myModal').on('show.bs.modal',function(e) {
    amount_before=$('#amount').val();
    orderid = e.relatedTarget.dataset.yourparameter;
    amt = e.relatedTarget.dataset.amount;
    if ( orderid == null || orderid == "") {
      console.log(amount_before);
      $('#amount').val(total_account_balce)
    }
      else{
        amount_before=amt;
        console.log('from totoal saccount'+amount_before);
        $('#amount').val(amt)
    };
     console.log('order amnt is '+amt)
     $('#order_id').val(orderid)
  });
 $('.refresh_box_show').hide();
});