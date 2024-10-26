document.addEventListener("DOMContentLoaded", () => {
    const fallingStarsContainer = document.querySelector(".falling-stars-container");

    // Function to create a single star
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position for the star along the top of the screen
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "-20px"; // Start just above the viewport
        star.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random duration
        star.style.animationDelay = "0s"; // Start immediately

        fallingStarsContainer.appendChild(star);

        // Remove the star after its animation ends
        setTimeout(() => {
            star.remove();
        }, 5000); // Adjust based on animation duration
    }

    // Call the function to start creating stars continuously
    function createFallingStars() {
        setInterval(createStar, 300); // Creates a new star every 500ms
    }

    // Start creating stars
    createFallingStars();
});


const MM = document.getElementById("MM");
 // Play the music
 MM.play(); // Play the audio