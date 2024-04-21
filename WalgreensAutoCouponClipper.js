// Get all elements with the class 'btn'
const clipElements = document.querySelectorAll('.btn');
// Start with index 0
let x = 0;

// Recursive function to click elements with delay
function clickElementWithDelay(x) {
    // If there are elements left to click
    if (x < clipElements.length) {
        // Check if the element contains the text 'Clip'
        if (clipElements[x].textContent.indexOf('Clip') > -1) {
            // Schedule a click after a random delay between 400-1000 milliseconds
            setTimeout(() => {
                clipElements[x].click();
                // Call the function recursively with the next index
                clickElementWithDelay(x + 1);
            }, Math.floor(Math.random() * (1000 - 400 + 1) + 400));
        } else {
            // If the element does not contain the text 'Clip', skip it
            clickElementWithDelay(x + 1);
        }
    }
}

// Start the recursive function with index 0
clickElementWithDelay(x);
