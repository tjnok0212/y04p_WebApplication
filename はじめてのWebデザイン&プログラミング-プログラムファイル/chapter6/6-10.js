$(function() {
	$('#keisan').on('click', function() {
		var a = $('#text-a').val();
		var b = $('#text-b').val();
		var ret = parseInt(a) + parseInt(b);
		$('#goukei').html(ret);
	});	
});
