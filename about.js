console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Successfully submitted!");
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment() {
	alert("Wow! You look cute as a kitten!")
}

document.getElementById("cat-image").addEventListener('mouseover', compliment)