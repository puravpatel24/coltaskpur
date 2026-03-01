$(document).ready(function() {
    
    // Page load thay tyare banne paragraph ma highlight class add karvo
    $("p").addClass("highlight");

    // Click karva par class toggle (add/remove) thase
    $("p").click(function() {
        $(this).toggleClass("highlight");
    });

});
