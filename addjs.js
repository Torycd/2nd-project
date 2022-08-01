(function(){
	"use strict";
	// Using let because convertType changes
	let convertType = "miles";

	// the use of queryselector makes sure the first html element of the specified 

	const heading =document.querySelector('h1');
	const intro = document.querySelector('p');
	const answerDiv = document.getElementById('answer');
	const form = document.getElementById('convert');

	document.addEventListener('keydown', function(event){
		// adding the event.code with the use of addEventListner to alert the button
		var key = event.code;

		if (key==='KeyK'){
			convertType = 'kilometer';
			heading.innerHTML = 'kilomters to miles converter';
			intro.innerHTML ='type in a number of kilomters and click the button to convert the distance to miles';

		}
		else if(key ==='KeyM') {
			convertType = 'miles';
			heading.innerHTML = 'miles to kilometers converter';
			intro.innerHTML ='type in a number of miles and click the button to convert the distance to kilomters';
		}
	});
	// this event listner is for the submit when we have input a value in the form input
	form.addEventListener('submit', function(event){
		
		event.preventDefault();

		var distance = parseFloat(document.getElementById('distance').value);

		if (distance) {
			// using the keydown event listner to know the convert type 
			if(convertType == "miles"){
				const converted = (distance * 1.609344).toFixed(3);
				answerDiv.innerHTML = `${distance} miles converts to ${converted} kilomters`
			}

			if (convertType == "kilometer"){
				const converted = (distance * 0.621371192).toFixed(3);
				answerDiv.innerHTML = `${distance} kilomter converts to ${converted} miles`
			}
		}

		else {
			answerDiv.innerHTML = "<h2>pleaes provide a number</h2>";
		}
	})

})();
