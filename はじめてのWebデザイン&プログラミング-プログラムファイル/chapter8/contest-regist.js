$(function() {	
	$('#regist').on('click', function() {
		var id = $('#id').val();
		var name = $('#name').val();
		var language = $('#language').val();
		var ajaxParam = {
			url : 'contest-regist.php',
			type: 'get',
			data: {id:id, name:name, language:language}
		}
		$.ajax( ajaxParam ).done(function() {
			location.reload();
		});
	});
});
	