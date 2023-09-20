document.addEventListener("DOMContentLoaded", function() {
    // Create 100 snowflakes initially
    for (let i = 0; i < 100; i++) {
        createSnowflake();
    }

    // Toggle snow button
    const toggleButton = document.getElementById("toggleSnow");
    toggleButton.addEventListener("click", function() {
        const snowflakes = document.querySelectorAll(".snowfall");
        if (Array.from(snowflakes)[0].style.display === "none" || !Array.from(snowflakes)[0].style.display) {
            snowflakes.forEach(flake => {
                flake.style.display = "block";
            });
        } else {
            snowflakes.forEach(flake => {
                flake.style.display = "none";
            });
        }
    });
});

function createSnowflake() {
    const flake = document.createElement("div");
    flake.className = "snowfall";
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.animationDuration = `${Math.random() * 7 + 8}s`; // 8 to 15 seconds duration
    flake.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(flake);
}
