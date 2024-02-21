// Get all elements with the "side" class
const sideButtons = document.querySelectorAll('.side');

// Loop through each button
sideButtons.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
        // Toggle a class to remove the border after the button is clicked
        button.classList.toggle('clicked');
    });
});
