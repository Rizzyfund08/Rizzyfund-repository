$(document).ready(function () {

}); 

//get DOM nodes
let redSlider = document.getElementById('redSlider');
let greenSlider = document.getElementById('greenSlider');
let blueSlider = document.getElementById('blueSlder');
let redOutput = document.getElementById('r');
let redHexOutput = document.getElementById('hexR');
let greenOutput = document.getElementById('g');
let greenHexOutput = document.getElementById('hexG');
let blueOutput = document.getElementById('b');
let blueHexOutput = document.getElementById('hexB');
let ColorBox = document.getElementById('Colorbox');

let setColor = function(){
ColorBox.style.backgroundColor = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")";
}
// input event listeners
redSlider.oninput = function(){
    redOutput.innerHTML = this.value;
    redHexOutput.innerHTML = Number(this,value). toString(16);
    setColor();
}
greenSlider.oninput = function(){
    greenOutput.innerHTML = this.value;
    greenHexOutput.innerHTML = Number(this,value). toString(16);
    setColor();
}
blueSlider.oninput = function(){
    blueOutput.innerHTML = this.value;
    blueHexOutput.innerHTML = Number(this,value). toString(16);
    setColor();
}