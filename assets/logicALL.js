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



function displayMovieInfo() {

        var movie = $(this).attr("data-name");
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // YOUR CODE GOES HERE!!!

        });

      }
 // Function for displaying movie data
      function renderButtons() {
        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Loops through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("topicBtn");
          // Added a data-attribute
          a.attr("data-name", topics[i]);
          // Provided the initial button text
          a.text(topics[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

// This function handles events where the add movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var movie = $("#movie-input").val().trim();

        // The movie from the textbox is then added to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".movie", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

//below is start pf random code

      var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });



<div>
  </div>

  <div id="gifBox">
  </div>

    $("button").on("click", function() {
      var person = $(this).attr("data-person");

      //give me JSON data that matches data-person parameter!
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=30";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifBox").prepend(gifDiv);
          }
        });
    });


var APIkey = "45fe827dc6029e020cd39a8ea022c844"
    // Create an AJAX call to retrieve data Log the data in console
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIkey
    // Log the data in HTML

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

       console.log(queryURL);
      console.log(response);


      $(".city").html("<h1>" + response.name + "Weather Details</h1>");  //CLASS .html pushes to class the response!
      $(".wind").text("Wind Speed" + response.wind.speed);
      $(".humidity").text("Humidity" + response.main.humidity);
      $(".temp").text("Temperature (F)" + response.main.temp);   //THESE PARAMETERS FOR CALLS ARE FROM API



    });



$(".gif").on("click", function() {

        // STEP ONE: study the html above.
        // Look at all the data attributes.
        // Run the file in the browser. Look at the images.

        // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

        // STEP TWO: make a variable named state and then store the image's data-state into it.
        // Use the .attr() method for this.

        // ============== FILL IN CODE HERE FOR STEP TWO =========================


        // CODE GOES HERE
        var state = $(this).attr("data-state");
        // =============================================

        // STEP THREE: Check if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.

        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));   //THIS in the second just dumps RIGHT into the src 
          $(this).attr("data-state", "animate");        //TELLING THE FUNCTION WE CHANGED THE STATE!
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        };

        
        // CODE GOES HERE

        // ==============================================

        // STEP FOUR: open the file in the browser and click on the images.
        // Then click again to pause.
    });



$("#breed-input").on("click", function() {

	var userInput = $(this).val().trim();
      //setting variable for **** ENDPOINT URL **** for the AJAX call
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

      //making AJAX call - GET is a RestfulAPI
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      //once AJAX is fully loaded it will move - since it is ASYNCHRONOUS!
      //we may NEVER get the data which is why it says wait till it DOES!
      //once AJAX IS RECEIVED - then DO what the function says...
      .done(function(response) {

        //imageURL is the link from the JSON data we get back
        //response.data is OURS and the image_original_url is what we set it to
        var imageUrl = response.data.image_original_url;

        //setting a variable for the data
        var catImage = $("<img>");

        //adding the ATTRIBUTES to the catImage variable
        //src is for IMG element we made above!
        //alt data is what GOOGLE uses to say what is on page; searchability
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        //THIS WILL ADD TO THE FRONT the newest cat one to div with ID images
        //UPDATING THE DOM
        $("#images").prepend(catImage);
      });
    });

$("button").on("click", function() {
      var person = $(this).attr("data-person");

      //give me JSON data that matches data-person parameter!
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=30";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
          
