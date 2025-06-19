let annualRain = 0;
let sqrFootage = 0;
let conversionRatio = 0.62;

let galons = 0;
let rainInput = document.getElementById("rainfall");
let feetInput = document.getElementById("sqrfeet");
let resultsText = document.getElementById("result");


rainInput.addEventListener("input", getAnnualRain);
feetInput.addEventListener("input", getSquareFeet);
function getSquareFeet(){
    sqrFootage = parseFloat(feetInput.value);
    updateResults();

}
function getAnnualRain(){
    annualRain = parseFloat(rainInput.value);
    updateResults();

}

function updateResults(){
    if(annualRain != 0 & sqrFootage != 0){
        galons = sqrFootage * annualRain * conversionRatio;
        resultsText.textContent = galons + " galons of water per year";
    }
    

}
