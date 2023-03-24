var box = document.querySelectorAll(".box");
var next = document.querySelectorAll(".nextButton");
var previous = document.querySelectorAll(".previousButton");
var inputField = document.querySelectorAll("input");

var isInputValid = [];

function init(index){
	next[index].addEventListener('click', function(){
		for(var i = index; i < inputField.length; i++){
			isInputValid.push(!!inputField[i].value);
		}
		if(isInputValid[index] && isInputValid[index+1]){
			box[index].style.animation = "fadeOut 1s";
			setTimeout(function(){
				box[index].style.display=  "none";
			}, 1000);
			box[index+1].style.animation = "fadeIn 1s";
			setTimeout(function(){
				box[index+1].style.display=  "grid";
			}, 1000);
		}
		else if(index === next.length-1){
			box[index].style.animation = "fadeOut 1s";
			setTimeout(function(){
				box[index].style.display=  "none";
			}, 1000);
			box[index+1].style.animation = "fadeIn 1s";
			setTimeout(function(){
				box[index+1].style.display=  "grid";
			}, 1000);

			// Submitting form
			//document.querySelector("form").submit();
		}
		isInputValid = [];
	});
}
for (var i = 0; i < next.length; i++){
	init(i);
}

function load(index){
	previous[index].addEventListener('click', function(){
		box[index+1].style.animation = "fadeOut 1s";
		setTimeout(function(){
			box[index+1].style.display=  "none";
		}, 1000);
		box[index].style.animation = "fadeIn 1s";
		setTimeout(function(){
			box[index].style.display=  "grid";
		}, 1000);
	});
}
for (var i = 0; i < previous.length; i++){
	load(i);
}