function toggleDarkMode() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        updateButtonBackground();
    });

    // Function to update button background color based on dark mode state
    function updateButtonBackground() {
        if (body.classList.contains("dark-mode")) {
            darkModeToggle.style.backgroundColor = "#000000"; // Dark mode button background color
        } else {
            darkModeToggle.style.backgroundColor = "#ffffff"; // Light mode button background color
        }
    }

    // Call the function initially to set the button background color
    updateButtonBackground();
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", toggleDarkMode);
