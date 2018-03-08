// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  function callGiphyAPIWithSearchTerm(searchTerm) {
    // use the giphyURLWithSearchTerm function to customize the url below
    var giphyURL = giphyURLWithSearchTerm(searchTerm);
    $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
           var url = response.data[0].images.original.url;
           appendImageToBody(url);
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked
$("#button0").click(function() {
callGiphyAPIWithSearchTerm($("#input0").val());
});

$("#button1").click(function() {
callGiphyAPIWithSearchTerm($("#input1").val());
});
    

$("#randomButton").click(function() {
     var firstInput = $("#input0").val();
    var secondInput = $("#input1").val();       
    var mixedInput = firstInput + " " + secondInput;
    callGiphyAPIWithSearchTerm(mixedInput);
    });
})