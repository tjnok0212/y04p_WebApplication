$(function() {
	var param = {
		url: '10-1.php',
		type: 'get',
		data: {date:'2022/5/5'},
		dataType: 'text'
	}
	$.ajax(param).done( function( txt ){
		document.write(txt);
	});
});
