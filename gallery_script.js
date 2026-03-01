$(document).ready(function() {

    // Click event on any thumbnail
    $(".thumb").click(function() {
        
        // Get the high-resolution image URL from data attribute
        var newSrc = $(this).attr("data-large");

        // Step 1: Fade out the current main image
        $("#main-display").fadeOut(300, function() {
            
            // Step 2: Change the image source once it's invisible
            $(this).attr("src", newSrc);
            
            // Step 3: Fade it back in
            $(this).fadeIn(300);
        });
    });

});
