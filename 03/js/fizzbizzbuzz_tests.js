(function() {

  $().ready(function() {
   
    module("fizznizzbuzz tesztek szam kiirasa");
    test("1==1", function() {
      return equal(fizzbizzbuzz(1), 1);
    });
	test("2==2", function() {
      return equal(fizzbizzbuzz(2), 2);
    });
	test("3==fizz", function() {
      return equal(fizzbizzbuzz(3), "3 fizz");
    });
	test("5==bizz", function() {
      return equal(fizzbizzbuzz(5), "5 bizz");
    });
	test("7==buzz", function() {
      return equal(fizzbizzbuzz(7), "7 buzz");
    });
	test("15==fizzbizz", function() {
      return equal(fizzbizzbuzz(15), "15 fizzbizz");
    });
	test("21==fizzbuzz", function() {
      return equal(fizzbizzbuzz(21), "21 fizzbuzz");
    });
	test("35==bizzbuzz", function() {
      return equal(fizzbizzbuzz(35), "35 bizzbuzz");
    });
    
  });

}).call(this);