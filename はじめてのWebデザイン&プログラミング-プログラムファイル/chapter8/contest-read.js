$(function() {	
	var ajaxParam = {
		url : 'contest-read.php',
		dataType : 'json'
	}
	$.ajax( ajaxParam ).done(function(ary) {
		var html = '<table>';
		html += '<tr><th>学生番号</th><th>氏名</th><th>開発言語</th><tr>';
		for (var data of ary) {
			html += '<tr>';
			html += '<td class="id">' + data[0] + '</td>';
			html += '<td class="name">' + data[1] + '</td>';
			html += '<td class="language">' + data[2] + '</td>';
			html += '</tr>';
		}
		html += '</table>';
		$('#list').html(html);
	});
});
	