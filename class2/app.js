import { calculateCircumference, calculateArea } from "./circleCalculator.js";

import { convertToNumber } from "./validation.js";

document.querySelector("#submitButton").onclick =submitFunction;

document.querySelector("#submitAreaButton").onclick =submitAreaFunction;


function submitFunction(){
   let userRadius = convertToNumber(document.getElementById('radius').value);
   let outputElement = document.getElementById("output");
   if(userRadius){
    let circumference = calculateCircumference(userRadius);    
    outputElement.innerHTML = `The Circumference is ${circumference}`;
   } else {
    outputElement.innerHTML = "Please enter a valid number";
   } 
}

function submitAreaFunction() {
  let userRadius = convertToNumber(document.getElementById('radiusForArea').value);
  let outputElement = document.getElementById("outputArea");
  if(userRadius){
    let area = calculateArea(userRadius);
    
    outputElement.innerHTML = `The Area is ${area}`;
   } else {
    outputElement.innerHTML = "Please enter a valid number";
   } 
}
