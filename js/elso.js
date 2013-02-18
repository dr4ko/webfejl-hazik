function nesze()
{
var szoveg = document.getElementById('valami').value;
document.getElementById('valami2').value = szoveg;
}

function hossz()
{
alert('A szoveg hossza a dobozokban: '+ document.getElementById('valami2').value.length);
}