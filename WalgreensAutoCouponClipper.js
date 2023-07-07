// Get all elements with the class 'btn'
const clipElements = document.querySelectorAll('.btn');
// Start with index 0
let i = 0;

// Recursive function to click elements with delay
function clickElementWithDelay(i) {
    // If there are elements left to click
    if (i < clipElements.length) {
        // Check if the element contains the text 'Clip'
        if (clipElements[i].textContent.indexOf('Clip') > -1) {
            // Schedule a click after a random delay between 300-800 milliseconds
            setTimeout(() => {
                clipElements[i].click();
                // Call the function recursively with the next index
                clickElementWithDelay(i + 1);
            }, Math.floor(Math.random() * (800 - 300 + 1) + 300));
        } else {
            // If the element does not contain the text 'Clip', skip it
            clickElementWithDelay(i + 1);
        }
    }
}

// Start the recursive function with index 0
clickElementWithDelay(i);
