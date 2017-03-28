$( "#removeDiv" ).click(function() {
 
  $( "#remove" ).slideUp();

});


$( "#setText" ).change(function() {
  $( "#needText" ).append($("#setText").val());
});


