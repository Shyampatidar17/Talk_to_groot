var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

// outputDiv.innerText = "shyam patidar"

// console.log(txtInput);

function clickHandler() {
    // console.log("clicked!");
    // console.log("input", txtInput.value);
    outputDiv.innerText = "dshjskj " + txtInput.value
}

btnTranslate.addEventListener("click", clickHandler);


// https://api.funtranslations.com/translate/groot.json