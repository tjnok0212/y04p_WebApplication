var year, month;
var schedule = {'6/13':'実験１レポート締切', '6/17':'プログラミング課題提出日', '6/22':'数学レポート締切'};

$(function() {
	draw( new Date(2022, 5, 1) );
});

function draw( now ) {
	year = now.getFullYear();
	month = now.getMonth();
	var title = '<span id="prev-month">＜</span>　';
	title += year + '年' + (month+1) + '月';
	title += '　<span id="next-month">＞</span>';
	$('#title').html(title);
	
	var html = '';
	var firstDay = new Date(year, month, 1);
	for(var i=1; i<=42; i++) {
		var day = new Date(year, month, i-firstDay.getDay());
		var m = day.getMonth();
		var d = day.getDate();
		var className = 'day';
		if (i%7 == 1) className += ' sunday';
		if (i%7 == 0) className += ' saturday';
		if (m != month) className += ' other-month';
		var s = d;
		for(var sch in schedule) {
			if (sch==(m+1)+'/'+d) {
				s += '<div class="schedule-text">' + schedule[sch] + '</div>';
			}
		}
		html += '<div class="' + className + '">' + s  + '</div>';
	}	
	$('#calendar').html(html);

	$('#prev-month').on('click', function() {
		draw( new Date(year, month-1, 1) );
	});

	$('#next-month').on('click', function() {
		draw( new Date(year, month+1, 1) );
	});
}
