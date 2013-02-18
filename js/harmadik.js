var myHandler = (function () {
	"use strict";
	var gomb, valami, valami2;
	function onClick()  {
		alert('A szoveg hossza a dobozokban: ' + valami2.value.length);
	}
	 function onKeyUp() {
		valami2.value = valami.value;
	}
	function setUp() {
		gomb = document.getElementById('gomb');
		valami = document.getElementById('valami');
		valami2 = document.getElementById('valami2');
		valami.addEventListener('keyup', onKeyUp);
		gomb.addEventListener('click', onClick);
	}
	return setUp;
})();

document.addEventListener('DOMContentLoaded', myHandler);
