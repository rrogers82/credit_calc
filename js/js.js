$(document).ready(function(){ // Document ready?

var _3months  = $('#3months');
var _6months  = $('#6months');
var _9months  = $('#9months');
var _12months = $('#12months');
var theInput = $('input');


$('#calculate').on('click', function(){
  var price = $('#product_price').val();
  if(price >= 389){ // if the price isnt the minimum amount
  _3months.val("£" + Math.round(price / 3));
  _6months.val("£" + Math.round(price / 6));
  _9months.val("£" + Math.round(price / 9));
  $("#extra").text("Spend just an extra £" +
    (function(){  // annonymous function to work out the extra for 12 month payments
      total = 450 - price;
      return total;
    }()) + " to spread over 12 months"
  ).css('color','red');
  _12months.attr('disabled', true);
  if(price >= 450){
  _12months.val("£" + Math.round(price / 12));
  _12months.attr('disabled', false);
  $("#extra").text("");
  }
  }else{
    alert('The minimum price for credit is £389')
    theInput.val(""); // reset all input boxes
  }
});

$('#clear').on('click', function(){
// clear the fields on button press
  theInput.val("");
})



// if over 389 then 3 and 6 months available
// if over 400 3 6 9 months available
// if over 479 3 6 9 12 months available
// $('input').attr('disabled', true);
}); // end of document ready function
