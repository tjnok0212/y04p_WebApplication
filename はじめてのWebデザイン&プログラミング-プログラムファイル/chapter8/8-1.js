$(function() {
	var param = {
		url: '8-1.php',
		type: 'get',
		dataType: 'text',
		data: {a: 100, b:200}
	};
	$.ajax( param ).done( function(txt) {
		$('#kekka').html(txt);
	}).fail(function(){
		alert('Ajax通信でエラーが発生');
	});
});
