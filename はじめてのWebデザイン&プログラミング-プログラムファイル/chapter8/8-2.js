$(function() {
	$('#text-a').on('keyup', keisan);
	$('#text-b').on('keyup', keisan);
});

function keisan() {
	var param = {
		url: '8-2.php',
		type: 'get',
		dataType: 'text',
		data: {a:$('#text-a').val(), b:$('#text-b').val()}
	};
	$.ajax( param ).done( function(txt) {
		$('#kekka').html(txt);
	}).fail(function(){
		alert('Ajax通信でエラーが発生');
	});
}
