$("#submit-button").on("click", function() {
    //assign movie title and rating from input boxes to variables.
    let movieTitle = $("#movie-title").val();
    let movieRating = $("#movie-rating").val();

    //check to make sure title is at least 2 characters long.
    if (movieTitle.length < 2) {
        alert("Movie title must be at least 2 characters long");
        $("#movie-title").val('');  
        return false;
    //check to make sure movie rating is between 1 and 10.
    } else if (movieRating < 1 || movieRating > 10) {
        alert("Rating must be between 1 and 10");
        $("#movie-rating").val('');
        return false;
    //If checks above pass > add movie title and rating to page
    } else {
        let movieElement = $("<li>" + movieTitle + "&emsp;" + movieRating + "&emsp;" + "<button id='delete'>X</button>" + "</li>");
        $("ul").append(movieElement);
        //deletes Movie Title and Rating fields after submission
        $("#movie-title").val('');  
        $("#movie-rating").val('');
        return false;
    }
});

// Removes movie from page when 'X' button is clicked
$("#movie-ul").on("click", "#delete", function(){
    $(this).parent().remove();
});