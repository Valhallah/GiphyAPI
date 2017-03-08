//variables
//=====================
var topics = ["Vison", "Iron Man", "Thor",];

//functions
//=====================

//function displayGif(){
	
	/*var queryURL ="http://api.giphy.com/v1/gifs/search?q=super%20hero"+"&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({
          url: queryURL,
          method: "GET"
      })
    .done(function(response) {
       

    //for (var i = 0; i < topics.length; i++) {
          //var b = $("<button>");*/
          
       
    

 

//main process
//=====================
$(document).ready(function(){
  $("button").on("click", function() {
      
      var xman = $(this).attr("data-mutant");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        xman + "xmen&api_key=dc6zaTOxFJmzC&limt=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var xDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var xImage = $("<img>");
          
            xImage.attr("src", results[i].images.fixed_height.url);

            
            xDiv.append(p);
            xDiv.append(xImage);

           
            $("#Gifdump").prepend(xDiv);
          }
        });
    });
});

      


