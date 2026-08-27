$(function() {
	$('#box').on('click', function() {
		var size = $('#size').val();
		if (size=='' || isNaN(size) || parseInt(size)<=0 ) {
			alert("正方形のサイズ（半角の0より大きい数値）を入力してください。");
			return;
		}
		$('#color-area').css({
			'backgroundColor': 'blue',
			'width': size,
			'height': size
		});
	});
});