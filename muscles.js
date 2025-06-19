let annualRain = 0;
let sqrFootage = 0;
let conversionRatio = 0.62;

let rainInput = document.getElementById("rainfall");
let feetInput = document.getElementById("sqrfeet");
let resultsText = document.getElementById("result");


rainInput.addEventListener('input', updateResults);
feetInput.addEventListener('input', getAnnualRain);
function getSquareFeet(){
    sqrFootage = feetInput.value;
    updateResults();

}
function getAnnualRain(){
    annualRain = rainInput.value;
    updateResults();

}

function updateResults(){
    resultsText.textContent = "HAHAHAHHAHHAHAH"

}
