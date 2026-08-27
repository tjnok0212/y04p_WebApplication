$(function() {
	var param = {
		url : '8-5.php',
		dataType : 'json'
	}
	$.ajax( param ).done( function(data) {
		var html = '';
		for (var key in data) {
			html += '学生番号：' + key;
			html += '　氏名：' + data[key].name;
			html += '　年齢：' + data[key].age + '<br>';
		}
		$('#list').html(html);
	});
});
	