var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// var serverURL ="https://api.funtranslations.com/translate/groot.json"

// var serverURL = "https://api.funtranslations.com/translate/minion.json"

var serverURL ="https://api.funtranslations.com/translate/ferb-latin.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

// outputDiv.innerText = "shyam patidar"

// console.log(txtInput);

function clickHandler() {
    // console.log("clicked!");
    // console.log("input", txtInput.value);
    // outputDiv.innerText = "dshjskj " + txtInput.value
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        // console.log(json.contents.translated)
    })
}

btnTranslate.addEventListener("click", clickHandler);
