// theme-switch.js
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("change", function() {
        if (themeToggle.checked) {
            body.classList.add("light-mode");
        } else {
            body.classList.remove("light-mode");
        }
    });
});
