window.addEventListener("load", function() {
    var loaderWrapper = document.getElementById("loader-wrapper");
    
    // Set a minimum time (1 second) before fading out
    setTimeout(function() {
        loaderWrapper.classList.add("loaded");
    }, 800); // Adjust delay in milliseconds
});