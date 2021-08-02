

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

var count = 0; 
const fact = document.getElementById("fact"); 

const generateFact = () => {
    if (count == factStrings.length - 1)
        count = 0;
    fact.innerHTML = factStrings[count];
    document.querySelector("#btn-container").appendChild(fact);
    count += 1;
}; 

var factButton = document.getElementById("fact-gen"); 
if (factButton) {
    factButton.addEventListener('click', generateFact); 
}

