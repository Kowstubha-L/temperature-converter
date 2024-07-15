const textbox = document.getElementById("textbox");
const tofahr = document.getElementById("tofahr");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

let temp;
function convert(event){
    event.preventDefault();
    if(tofahr.checked){
        temp = Number(textbox.value);
        temp = (temp*9/5 )+ 32;
        result.textContent = temp.toFixed(1)+ "\u00B0"+"F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = 5/9*(temp - 32);
        result.textContent = temp.toFixed(1)+ "\u00B0"+"F";
    }
    else{
        result.textContent = "select a unit";
    }
}