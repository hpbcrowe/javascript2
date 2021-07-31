import { calculateCircumference } from "./circleCalculator.js";

document.getElementById("submitButton").onclick =submitFunction;

function submitFunction(){
    
   let r = parseFloat(document.getElementById('radius').value);
   let circumference = calculateCircumference(r);
  document.getElementById("output").innerHTML = `The Circumference is ${circumference}`;
}