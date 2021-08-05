// ----------- FACT BUTTON----------- 
// Wil replace with relevant facts 
const factStrings = [
"The Gaza Strip, named after the 140 square miles strip of land where 2 million Palestinians live, is nicknamed the world’s largest open-air prison.", 
"According to the United Nations, the humanitarian crisis in Yemen is the worst in the world.",
"4 million+ people remain internally displaced within Yemen, 73% of whom are women and children.",
"Yemen has a poverty rate exceeding 50%, and 80% of the population (~23.2 million) is reliant on humanitarian assistance.", 
"“UNICEF estimates that a child dies every ten minutes in Yemen of preventable diseases, about 50,000 and growing each year”", 
"More than 80% of the Syrian population live in extreme poverty, living off of $1.90 per day.", 
"Hair and nails grow faster during pregnancy.", 
]; 


const creditStrings = [
    "NRC", 
    "Al-Jazeera News", 
    "HRW", 
    "Center for Disaster Philanthropy", 
    "Center for Disaster Philanthropy", 
    "World Vision"
]; 

const creditURLS = [
    "https://www.nrc.no/news/2018/april/gaza-the-worlds-largest-open-air-prison/", 
    "https://www.aljazeera.com/news/2021/3/23/children-25-of-civilian-casualties-in-yemen-relief-agency", 
    "https://www.hrw.org/world-report/2021/country-chapters/yemen", 
    "https://disasterphilanthropy.org/disaster/yemen-humanitarian-crisis/", 
    "https://disasterphilanthropy.org/disaster/yemen-humanitarian-crisis/", 
    "https://www.worldvision.org/refugees-news-stories/syrian-refugee-crisis-facts"
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