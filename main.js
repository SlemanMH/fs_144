function increaseFontSize (){
    document.querySelector("div").classList.add("increaseFontSize");
}
document.querySelector(".increase").onclick = increaseFontSize;

function decreaseFontSize (){
    document.querySelector("div").classList.remove("increaseFontSize");
}
document.querySelector(".decrease").onclick = decreaseFontSize;