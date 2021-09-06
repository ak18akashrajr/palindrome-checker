let inputEl=document.getElementById("input-el");
let outputEl=document.getElementById("output-el")


function check() {
    let splitString = inputEl.value.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    if (inputEl.value==joinArray) {
        outputEl.textContent=joinArray+" is palindrome";
        
        
    } else {
        outputEl.textContent=joinArray+" is not palindrome";
        
        
    }
}
function listen(){
    
}
