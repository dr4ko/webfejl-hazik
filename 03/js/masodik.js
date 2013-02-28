var myHandler = {
	gomb: null,
	valami: null,
	valami2: null,
	onClick: function() {
		alert('A szoveg hossza a dobozokban: ' + myHandler.valami2.value.length);
	},
	onKeyUp: function() {
		myHandler.valami2.value=myHandler.valami.value;
	},
	setUp: function() {
		myHandler.gomb = document.getElementById('gomb');
		myHandler.valami = document.getElementById('valami');
		myHandler.valami2 = document.getElementById('valami2');
		myHandler.valami.addEventListener('keyup', myHandler.onKeyUp);
		myHandler.gomb.addEventListener('click', myHandler.onClick);
	}
}
document.addEventListener('DOMContentLoaded', myHandler.setUp);