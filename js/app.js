$( "#removeDiv" ).click(function() {
 
  $( "#remove" ).slideUp();

});


$( "#setText" ).change(function() {
  $( "#needText" ).append($("#setText").val());
});

$( "#setColor" ).click(function() {
 
  $( "#changeColor" ).css('background-color', 'red');

});
