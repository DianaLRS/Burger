$(".change-devoured").on("click", function(event) {
    console.log("hey!")
    var id = $(this).data("id");
    newDevoured = $(this).data("newDevoured");

    var eatenBurger = {
        devoured: true
    };
    //  PUT Requests 
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenBurger
    }).then(function() {
        console.log(newDevoured + "has been devoured!")
        location.reload();

    })
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burg").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Order In!")
        location.reload();

    })
})