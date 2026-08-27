$(function() {
	$('#oshite').on('click', function(){
		if ($('#color').html()=='ブルー') {
			$('#color').html('ホワイト');
			$('#color').css({
				'background-color':'white',
				'left': 200
			});
		}
		else {
			$('#color').html('ブルー');
			$('#color').css({
				'background-color':'#7dcdf3',
				'left': 0
			});
		}
	});
});