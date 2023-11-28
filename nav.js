var userToggled = false;

function toggleNav() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
        userToggled = true;
    } else {
        x.style.display = "block";
        userToggled = true;
    }
}

window.addEventListener('resize', function() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var x = document.getElementById("nav-links");
    
    if (width >= 1024) {
        x.style.display = "block"; // Ensure that nav-links is displayed
        x.removeAttribute('style'); // Remove any inline styles applied during mobile view
        userToggled = false; // Reset this so further toggling in mobile view is unaffected
    }
});