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
	}
});