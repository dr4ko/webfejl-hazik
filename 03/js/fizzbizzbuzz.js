function fizzbizzbuzz(i){
  var  msg = 0;
    if((i%3)== 0){
        msg = i + ' fizz';
	}
    if((i%5)== 0){
        msg = i + ' bizz';
	}
    if((i%7)== 0){
         msg = i + ' buzz';
	}
    if((i%3)== 0 && (i%5)==0){
         msg = i + ' fizzbizz';
	}
    if((i%3)== 0 && (i%7)==0){
         msg = i + ' fizzbuzz';
	}
    if((i%7)== 0 && (i%5)==0){
        msg = i + ' bizzbuzz';
	}
    if((i%3)== 0 && (i%5)==0 && (i%7)==0){
         msg = i + ' fizzbizzbuzz';
	}
    if(msg == 0){
         msg = i;
	}
     return msg;
}
