$(document).ready(function() {

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedDescription = $("input#new-description").val();

    var newTasks = { name: inputtedName, description: inputtedDescription };

    $("ul#tasks").append("<li><span class='tasks'>" + newTasks.name + "</span></li>");

    $(".tasks").last().click(function() {
      $("#show-tasks").show();

      $("#show-tasks h2").text(newTasks.name);
      $(".name").text(newTasks.name);
      $(".description").text(newTasks.description);
    });
  });
  $("input#new-name").val("");
  $("input#new-description").val("");
});
