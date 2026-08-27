$(function() {
	var param = {
		url: '10-5.php',
		type: 'get',
		dataType: 'json'
	}
	$.ajax(param).done( function( obj ){
		for (var date in obj) {
			document.write(date+' '+obj[date]+'<br>');
		}
	});
});
