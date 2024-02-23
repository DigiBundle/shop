document.addEventListener("DOMContentLoaded", function() {
    var allLinks = document.querySelectorAll("a");
    allLinks.forEach(function(link) {
        link.classList.add("disabled-link");
    });

    var allowedLinks = document.querySelectorAll("a.allowed-link");
    allowedLinks.forEach(function(link) {
        link.classList.remove("disabled-link");
    });
});
