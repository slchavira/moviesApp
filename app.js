// let movies = [];

// let title = $("#movie-title").value();
// console.log(title);

$("#submit-button").on("click", function() {
    //assign movie title and rating from input boxes to variables.
    let movieTitle = $("#movie-title").val();
    let movieRating = $("#movie-rating").val();
    let movieElement = $("<li>" + movieTitle + "&emsp;" + movieRating + "&emsp;" + "<button id='delete'>X</button>" + "</li>");
    $("ul").append(movieElement);
    return false; //prevents page reload
});

$("button #delete").on("click", function() {
    console.log(this);
});