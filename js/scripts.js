$(document).ready(function() {

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDescription = $("input#new-description").val();

    var newTasks = { name: inputtedName, description: inputtedDescription };
    //give li a unique id to select later for deletion.
    $("ul#tasks").append("<li class='tasks task-" + newTasks.name + "'>" + newTasks.name + "</li>");

    $(".tasks").last().click(function() {
      $("#show-tasks").show();

      $("#show-tasks h2").text(newTasks.name);
      $(".name").text(newTasks.name);
      $(".description").text(newTasks.description);

    });

    $("input#new-name").val("");
    $("input#new-description").val("");
    $(".complete-task").click(function() {
      debugger;
      $("#completed-tasks").append("<li><span class='tasks'>" + newTasks.name + "</span></li>");
      $("#show-tasks h2").text("");
      $(".name").text("");
      $(".description").text("");
      $(".task-" + newTasks.name).remove();
    });

  });
});



$(".new-address").each(function() {
     var inputtedStreet = $(this).find("input.new-street").val();
     var inputtedCity = $(this).find("input.new-city").val();
     var inputtedState = $(this).find("input.new-state").val();

     var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
     newContact.addresses.push(newAddress);
   });
