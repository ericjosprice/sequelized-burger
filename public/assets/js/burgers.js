// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(document).on("click", ".burger-devoured", function (event) {
    console.log("button clicked")
    var id = $(this).attr("data-id");
    console.log(id)

    var devouredTrue = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredTrue
    }).then(
      function () {
        console.log("changed to: " + devouredTrue);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("submit button clicked");

    var newBurger = {
      name: $("#newBurger").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    $("#newBurger").val("");
  });
});
