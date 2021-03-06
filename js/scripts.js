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

      $(".complete-task").off();
      $(".complete-task").click(function() {
        $("#show-tasks").hide()
        $("#completed-tasks").append("<li><span class='tasks'>" + newTasks.name + "</span></li>");
        $("#show-tasks h2").text("");
        $(".name").text("");
        $(".description").text("");
        $(".task-" + newTasks.name).remove();
      });
    });

    $("input#new-name").val("");
    $("input#new-description").val("");

  });
});
