/*
Program Name: Recipe Display Application
Author: April Bradley
Date: 19 November 2016
Filename: script.js
*/

/*global $*/
/*global "slow"*/

//displays the next element after the current target
function display(event) {
    
        $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);
