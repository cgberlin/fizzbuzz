$(document).ready(function() {
	for (var numberCounted = 1; numberCounted <= 100; numberCounted++) {
		if ((numberCounted % 3 == 0) && (numberCounted % 5 == 0)){
			$('.content').append('<p>fizzbuzz</p>');
		}
		else if (numberCounted % 3 == 0) {
			$('.content').append('<p>fizz</p>');
		}
		else if (numberCounted % 5 == 0) {
			$('.content').append('<p>buzz</p>');
		}
		else {
			$('.content').append('<p>'+numberCounted+'</p>');
		}
	}
});

