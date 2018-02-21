//first thing to do:
document.addEventListener("DOMContentLoaded", function(event){

var screen;
var	output
var operation;

var screen = document.getElementById("screen");

//now we want to click on number in a calculator, it's targeting
var buttonNum = document.getElementsByClassName('buttonNum');
    for(var i = 0; i < buttonNum.length; i++ ) {
        buttonNum[i].addEventListener("click",function(event) {    
            //console.log(event.target.innerHTML);
            screen.innerHTML = event.target.innerHTML;
       });
    }

var operator = document.getElementsByClassName('operator');
    for(var i = 0; i < operator.length; i++ ) {
        operator[i].addEventListener("click",function(event) {
            screen.innerHTML = event.target.innerHTML;
       });
    }

var equals = document.getElementsByClassName('equals');
    for(var i = 0; i < equals.length; i++ ) {
        equals[i].addEventListener("click",function(event) {
            screen.innerHTML = event.target.innerHTML;
       });
    }

var buttonClear = document.getElementsByClassName('buttonClear');
    for(var i = 0; i < buttonClear.length; i++ ) {
        buttonClear[i].addEventListener("click",function(event) {
            screen.innerHTML = event.target.innerHTML;
       });
    }






});