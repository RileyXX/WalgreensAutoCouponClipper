const clipElements = document.querySelectorAll('.btn');
let i = 0;
function clickElementWithDelay(i) {
    if (i < clipElements.length) {
        if(clipElements[i].textContent.indexOf('Clip')>-1){
			// Set a timeout function to wait for a random time between 300ms to 1800ms
            setTimeout(() => {
                clipElements[i].click();
                clickElementWithDelay(i + 1);
            }, Math.floor(Math.random()*(1800-300+1)+300));
        }else{
            clickElementWithDelay(i + 1);
        }
    }
}
clickElementWithDelay(i);