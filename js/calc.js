//first thing to do:
document.addEventListener("DOMContentLoaded", function(event){

var screen;
var	result;
//The function button
var operator;
//The number currently being entered
var current;
//to store the previous number you entered
var memory;

var screen = document.getElementById("screen");

//now we want to click on number in the calculator
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


// Operation functions
function Calculator() {
	var operator = function(result, input) {
		return result + input;
	};
	this.add = function(input){
		return operation(input, operator);
	};

	this.multiply = function(input){
		return operation(input, function(result, input) {
			return result * input;
		});
	}

	this.subtract = function(input){
		return operation(input, function(result, input) {
			return result - input;
		});
	}

	this.divide = function(input){
		return operation(input, function(result, input) {
			return result / input;
		});
	}
};
});