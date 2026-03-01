$(document).ready(function() {
    
    // 1. Button click par navo item add karvo (.append)
    $("#add-task-btn").click(function() {
        $("#task-list").append("<li>New Task</li>");
    });

    // 2. Pehla item no text badlavo (.text)
    $("#update-first-btn").click(function() {
        $("#task-list li:first").text("Updated");
    });

    // 3. li par click karva thi .completed class toggle thase
    // Note: 'on' vaparyu chhe jethi nava add thavala items par pan click kaam kare
    $(document).on("click", "#task-list li", function() {
        $(this).toggleClass("completed");
    });

});
