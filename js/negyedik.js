function fizzbizzbuzz()
{
var x="";
for (var i=1;i<100;i++)
  {
  if((i%3==0) && (i%5==0) && (i%7==0)){
	x=x +  i + ": fizzbizzbuzz " + "<br>";
  } else if((i%5==0) && (i%7==0)){
	x=x +  i + ": buzzbizz " + "<br>";
  } else if((i%3==0) && (i%7==0)){
	x=x +  i + ": fizzbizz " + "<br>";
  } else if((i%3==0) && (i%5==0)){
	x=x +  i + ": fizzbuzz " + "<br>";
  } else if((i%3)==0){
	x=x +  i + ": fizz " + "<br>";
  } else if((i%5)==0){
	x=x +  i + ": buzz " + "<br>";
  } else if((i%7)==0){
	x=x +  i + ": bizz " + "<br>";
  }  
  else {
	x=x +  i + ": " + i + "<br>";
  }
  }
document.getElementById("fbb").innerHTML=x;
}
