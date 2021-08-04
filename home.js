// ----------- FACT BUTTON----------- 
// Wil replace with relevant facts 
const factStrings = [
"More human twins are being born now than ever before.", 
"A narwhal's tusk reveals its past living conditions.",
"The first person convicted of speeding was going eight mph.",
"'New car smell' is the scent of dozens of chemicals.", 
"The world wastes about 1 billion metric tons of food each year.", 
"The severed head of a sea slug can grow a whole new body.", 
"Hair and nails grow faster during pregnancy.", 
]; 

// Initialize and declare count variable to keep track of array contents
var count = 0; 

// Retrieve empty paragraph tag 
const fact = document.getElementById("fact"); 

// Appends actual fact to button container using count to index into array
const generateFact = () => {
    if (count == factStrings.length - 1)
        count = 0;
    fact.innerHTML = factStrings[count];
    document.querySelector("#btn-container").appendChild(fact);
    count += 1;
}; 

// Retrieve fact generator button 
// If button is not null, on click run generateFact()
var factButton = document.getElementById("fact-gen"); 
if (factButton) {
    factButton.addEventListener('click', generateFact); 
}

// ----------- TOOLTIPS FOR MAP ----------- 
const tooltips = document.querySelectorAll('.all-tooltips .tooltip'); 
const mapSection = document.querySelector('section'); 
const mapContainer = document.querySelector('.container'); 
let timeOut; 

// Account for right and left conflicts
// Function positions content underneath pin 
const contentPos = () => {
    tooltips.forEach(tooltip => {
        const pin = tooltip.querySelector('.pin'); 
        const content = tooltip.querySelector('.tooltip-content'); 
        const arrow = tooltip.querySelector('.arrow'); 
        content.style.left = pin.offsetLeft - content.offsetWidth / 2 + "px"; 
        content.style.top = pin.offsetTop + 40 + "px"; 
        arrow.style.left = pin.offsetLeft - content.offsetLeft + pin.offsetWidth / 2 - 3 + "px";   

    })
}

// Adding event listeners so once content is fully loaded, contentPos will be called
window.addEventListener("resize", contentPos);
window.addEventListener("DOMContentLoaded", contentPos); 

// For each tooltip, when we mouseover the pin we want to change the class to 'active' 
// When we mouseout, we want to wait 700 ms before the tooltip container closes
tooltips.forEach(tooltip => {
    const pin = tooltip.querySelector('.pin');
    const content = tooltip.querySelector('.tooltip-content'); 
    pin.addEventListener('mouseover', () => {
        tooltip.classList.add('active'); 
    })

    pin.addEventListener('mouseleave', () => {
        timeOut = setTimeout(() => {
            tooltip.classList.remove('active'); 
        }, 700)
    })

    content.addEventListener('mouseover', () => {
        clearTimeout(timeOut); 
        tooltip.classList.add('active');
    })

    content.addEventListener('mouseleave', () => {
        timeOut = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 700)
    })
})