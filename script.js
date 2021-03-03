let thousands = document.getElementById('thousands');
let hundreds = document.getElementById('hundreds');
let tens = document.getElementById('tens');
let ones = document.getElementById('ones');
let form = document.getElementById('RunForm');
let status = document.getElementById('status');

function redStatus(txt) {
	status.innerText = txt
	status.style.color = "red"
}

function greenStatus(txt) {
	status.innerText = txt
	status.style.color = "green"
}

function noStatus() {
	status.innerText = ''
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

form.addEventListener('submit', event => {
	// submit event detected
	event.preventDefault();
	let input = form.children[1].value;
	let isnum = /^\d+$/.test(input);
	if (isnum === false) {
		redStatus("Cannot Use Letters");
		return
	};
	if (input.length !== 4) {
		redStatus("To short");
		return
	};
	greenStatus('Working');
	thousands.innerText = "0";
	hundreds.innerText = "0";
	tens.innerText = "0";
	ones.innerText = "0";
	for (i = 1; i <= 10000; i++) {
		if (tens.innerText === "10") {
			tens.innerText = "0";
			hundreds.innerText = parseInt(tens.innerText) + 1;
		};
		if (ones.innerText === "9") {
			ones.innerText = "0";
			tens.innerText = parseInt(tens.innerText) + 1;
		} else {
			ones.innerText = parseInt(ones.innerText) + 1;
		};
	};
	greenStatus("Done")
});