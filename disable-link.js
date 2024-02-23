document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor (link) elements on the page
    var allLinks = document.querySelectorAll("a");

    // Loop through each link and disable it
    allLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
        });
        link.classList.add("disabled-link");
    });

    // Enable links with a specific class (e.g., "allowed-link")
    var allowedLinks = document.querySelectorAll("a.allowed-link");
    allowedLinks.forEach(function(link) {
        link.removeEventListener("click", function(event) {
            event.preventDefault();
        });
        link.classList.remove("disabled-link");
    });
});
