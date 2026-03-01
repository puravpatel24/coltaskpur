$(document).ready(function() {
    
    // Mouse image par ave tyare
    $("#target-img").mouseenter(function() {
        // Opacity 0.5 karvi
        $(this).css("opacity", "0.5");
    });

    // Mouse image par thi hatavi lo tyare
    $("#target-img").mouseleave(function() {
        // Opacity pachi 1 (original) karvi
        $(this).css("opacity", "1");
    });

});
