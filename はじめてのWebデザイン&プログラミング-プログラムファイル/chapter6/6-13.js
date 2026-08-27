$(function() {
	$('#oshite').on('click', function(){
		if ($('#color').html()=='ブルー') {
			$('#color').html('ホワイト').css({
				'background-color':'white',
				'left':200
			});
		}
		else {
			$('#color').html('ブルー').css({
				'background-color':'#00a0e8',
				'left':0
			});
		}
	});
});