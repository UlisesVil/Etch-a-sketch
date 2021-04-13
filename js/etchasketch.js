"use strict"


let container= document.querySelector("#container");
let container2=document.querySelector("#container2");

let num1=16;
function createDivs(num1){
    for(let i = 1; i <= num1 * num1; i++){
        let div = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${num1}, auto)`;
        container.appendChild(div);
        div.classList.add("grid");
    }
}

function createDivs2(num1){
    for(let i = 1; i <= num1 * num1; i++){
        let div = document.createElement("div");
        container2.style.gridTemplateColumns = `repeat(${num1}, auto)`;
        container2.appendChild(div);
        div.classList.add("grid");
    }
}
createDivs(num1);
createDivs2(num1);

//Change Color
let div=document.querySelector("#container");
div.addEventListener("mouseover", function(e){
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    e.target.style.backgroundColor = "#" + color;
});

//Drawing Function
let div2=document.querySelector("#container2");
div2.addEventListener("click", function(e){
    e.target.style.backgroundColor = document.body.style.backgroundColor;
});

//Grid Size
let button = document.querySelector("#submit");
button.addEventListener("click",function(){
    container.innerHTML = "";
    let squaresNum = document.querySelector("#squaresNum").value;
    createDivs(squaresNum);
});

button.addEventListener("click",function(){
    container2.innerHTML = "";
    let squaresNum = document.querySelector("#squaresNum").value;
    createDivs2(squaresNum)
});

//Reset
let reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
    container.innerHTML = "";
    container2.innerHTML = "";
    createDivs(num1);
    createDivs2(num1)
});

//Rainbow Mode
let rainbow=document.querySelector("#rainbow");
container2=document.querySelector("#container2");
rainbow.addEventListener("click", function(){
    div.style.display="";
    container2.style.display="none";
});

//Draw Mode
let drawmode=document.querySelector("#drawmode");
drawmode.addEventListener("click", function(){
    div.style.display="none";
    container2.style.display="";
alert("pick a color to start drawing");
});





