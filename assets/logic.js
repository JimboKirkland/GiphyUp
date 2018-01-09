var topics = [
	"Boxers",
	"Bulldog",
	"Great Dane",
	"Golden Retriever",
	"Siberian Husky",
	"Shiba Inu",
	"Jack Russell Terrier",
	"St. Bernard",
	"Bichon Frise",
	"Newfoundland",
	"Chihuahua",
	"Dobermann"
	];


 // Function for displaying movie data
function displayMovieInfo() {
    event.preventDefault();
      var key = "4HJ6pCHDzI89AF4oIPknm1F3NtjPULK";
      var breed = $(this).attr("data-name");

      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="
      + key + "s&q="+ breed +"&limit=10&offset=0&rating=G&lang=en"; 

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);

        var movieDiv = $("<div class='movie'>");
        for (var i = 0; i < response.data.length; i++) {

          var rating = response.data[i].rating;
          var ratingPara = $("<p>").text("Rating: " + rating);

          movieDiv.append(ratingPara);

          var imgURL = response.data[i].images.fixed_width_still.url;

          var image = $("<img class='gif'>").attr("src", imgURL);

          movieDiv.append(image);

          $("#movies-box").append(movieDiv);

        }
    });
}



function gif(){

   var src = $(this).attr("src");
    $(this).attr("src", src.replace(/giphy_s/gi, "giphy-preview"));
       
    };


function gifs(){

   var src = $(this).attr("src");
    $(this).attr("src", src.replace(/giphy-preview/gi, "giphy_s"));
    
    };



    function renderButtons() {

        $("#movies-view").empty();

        for (var i = 0; i < topics.length; i++) {

          var a = $("<button>");
          
          a.addClass("topics");
          
          a.attr("data-name", topics[i]);
          
          a.text(topics[i]);
          
          $("#movies-view").append(a);
        }
      }



    $("#add-movie").click(function(event) {
    
        event.preventDefault();
        var topic = $("#movie-input").val().trim();
        topics.push(topic);

        renderButtons();
    });


$(document).on("click", ".topics", displayMovieInfo);
      $(document).on("click", ".gif", gif);
      $(document).on("dblclick", ".gif", gifs);
renderButtons();




