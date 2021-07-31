export function outputToElement(elementId, value, color){
    document.getElementById(elementId).innerHTML = value;
    if(color) {
        document.getElementById(elementId).style.color = color;
    } else{
        document.getElementById(elementId).style.color = "inherit";
    }

}