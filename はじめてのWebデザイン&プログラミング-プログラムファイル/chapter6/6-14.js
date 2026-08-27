$(function() {
	$('#oshite').on('click', function(){
		if ($('#color').html()=='ブルー') {
			$('#color').html('ホワイト')
				.animate({
					'background-color': '#ffffff',
					'left': 200
				}, 2000);
		}
		else {
			$('#color').html('ブルー')
				.animate({
					'background-color': '#7dcdf3',
					'left': 0
				}, 2000);
		}
	});
});