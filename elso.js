var textbox, outputContainer;
var counter = 0;

function createNewOutput(msg) {
	var li = document.createElement('li');
	li.innerHTML = msg;
	outputContainer.appendChild(li);
}

function onPush(ev) {
	createNewOutput( ++counter + '. kattintås');
}

function add(text){
    var TheTextBox = document.getElementById("textbox");
    TheTextBox.value = TheTextBox.value + text;
}

function setUp() {
	textbox = document.getElementById('textbox');
	outputContainer = document.getElementById('output');
	textbox.addEventListener('click', onPush);
}

document.addEventListener('DOMContentLoaded', setUp);