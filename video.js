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


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('Make');
    
    // Attempt to play the audio on page load
    audio.play().catch(function(error) {
        console.log('Audio playback failed:', error);
        // Unmute on the first click
        document.body.addEventListener('click', function() {
            audio.muted = false; // Unmute on first click
            audio.play().catch(function(err) {
                console.log('Audio playback still failed:', err);
            });
        }, { once: true }); // Ensure it only adds the listener once
    });
});

