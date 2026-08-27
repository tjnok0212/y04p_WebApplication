$(function() {
	var param = {
		url: 'ex8.php',
		type: 'get',
		data: {x:100, y:200},
		dataType: 'text'
	};
	$.ajax(param)
		.done( function(txt) {
			$('#result').html(txt);
		});
});