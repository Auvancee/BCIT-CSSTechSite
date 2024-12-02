//buttons
let transformBtn = document.getElementById("translate-button");
let skewXBtn = document.getElementById("skewX-button");
let skewYBtn = document.getElementById("skewY-button");
let skewXYBtn = document.getElementById("skewXY-button");
let scaleBtn = document.getElementById("scale-button");
let rotateBtn1 = document.getElementById("rotate-button1");
let rotateBtn2 = document.getElementById("rotate-button2");
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

skewXBtn.addEventListener("click", function(){
    redSquare2.classList.toggle("skewX");
});

skewYBtn.addEventListener("click", function(){
    redSquare2.classList.toggle("skewY");
});

skewXYBtn.addEventListener("click", function(){
    redSquare2.classList.toggle("skewXY");
});

scaleBtn.addEventListener("click", function(){
    redSquare3.classList.toggle("scale");
});

rotateBtn1.addEventListener("click", function(){
    redSquare4.classList.toggle("rotate1");
});

rotateBtn2.addEventListener("click", function(){
    redSquare4.classList.toggle("rotate2");
});

matrixBtn.addEventListener("click", function(){
    redSquare5.classList.toggle("matrix");
});