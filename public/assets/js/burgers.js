//a bit confused by some of this syntax
$(function() {
    $("#createBurger").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(), 
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );

    });

    $(".clickToEat").on("click", function(event) {
        console.log("The devour button was clicked");
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: {devoured: 1}
        }).then(
            function() {
                console.log("The burger should be devoured");
                location.reload();
            }
        );
    });

    $("");
})