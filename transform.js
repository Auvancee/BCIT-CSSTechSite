//buttons
let transformBtn = document.getElementById("translate-button");
let skewBtn = document.getElementById("skew-button");
let scaleBtn = document.getElementById("scale-button");
let rotateBtn = document.getElementById("rotate-button");
let matrixBtn = document.getElementById("matrix-button");
//
let redSquare1 = document.getElementById("red1"); 
let redSquare2 = document.getElementById("red2"); 
let redSquare3 = document.getElementById("red3");
let redSquare4 = document.getElementById("red4");
let redSquare5 = document.getElementById("red5");  
transformBtn.addEventListener("click", function(){
    redSquare1.classList.toggle("translate");
});

skewBtn.addEventListener("click", function(){
    redSquare2.classList.toggle("skew");
});

scaleBtn.addEventListener("click", function(){
    redSquare3.classList.toggle("scale");
});

rotateBtn.addEventListener("click", function(){
    redSquare4.classList.toggle("rotate");
});

matrixBtn.addEventListener("click", function(){
    redSquare5.classList.toggle("matrix");
});