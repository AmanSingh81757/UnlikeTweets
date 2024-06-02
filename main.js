// Before running the code read this

// open the liked tweets page on your twitter profile
// open devtools and click on console
// run the following code except the last line which is to be run after the unliking is done to stop scrolling.

function autoDelete() {
   window.scrollTo(0,document.body.scrollHeight);
    for(let i =0; i<document.querySelectorAll("button[data-testid='unlike']").length; i++) 
      document.querySelectorAll("button[data-testid='unlike']")[i].click();
}

// set the time after which the page scrolls and unlikes the tweets   1000  ->   [ 1000ms == 1s ]
var waitTimeMilliseconds = 2000;

var refreshIntervalId = setInterval(autoDelete, waitTimeMilliseconds); 


// after the unliking is done run the following command in console 
clearInterval(refreshIntervalId);
