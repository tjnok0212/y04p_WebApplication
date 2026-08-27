$(function() {
	var param = {
		url: '10-2.php',
		type: 'get',
		data: {start:'2022-04-01', end:'2022-05-31'},
		dataType: 'json'
	}
	$.ajax(param).done( function( obj ){
		for (var date in obj) {
			document.write(date+' '+obj[date]+'<br>');
		}
	});
});

