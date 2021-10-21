$("#submit-button").on("click", function() {
    //assign movie title and rating from input boxes to variables.
    let movieTitle = $("#movie-title").val();
    let movieRating = $("#movie-rating").val();
    let movieElement = $("<li>" + movieTitle + "&emsp;" + movieRating + "&emsp;" + "<button id='delete'>X</button>" + "</li>");
    $("ul").append(movieElement);
    //deletes Movie Title and Rating fields after submission
    $("#movie-title").val('');  
    $("#movie-rating").val('');
    return false; //prevents page reload
});

$("#movie-ul").on("click", "#delete", function(){
    $(this).parent().remove();
});