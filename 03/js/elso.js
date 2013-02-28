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
	
document.addEventListener('DOMContentLoaded', setUp);