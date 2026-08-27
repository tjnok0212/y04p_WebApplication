let year, month;

$(function() {
	drawCalendar( new Date() );
});

function drawCalendar( now ) {
	year = now.getFullYear();
	month = now.getMonth();
	const firstDay = new Date(year, month, 1);
	const start = dateFormat( new Date(year, month, 1-firstDay.getDay()) );
	const end = dateFormat( new Date(year, month, 1-firstDay.getDay()+41) );
	const param1 = {
		url: 'holiday.php',
		type: 'get',
		data: {start: start, end: end},
		dataType: 'json'
	}
	$.ajax(param1).done( function(holiday) {
		const param2 = {
			url: 'schedule.php',
			type: 'get',
			data: {start: start, end: end},
			dataType: 'json'
		}
		$.ajax(param2).done( function(schedule) {
			draw( holiday, schedule );
		});
	});
}

function dateFormat( dt ) {
	let year = dt.getFullYear();
	let month = dt.getMonth()+1;
	let date = dt.getDate();
	return year + '-' + ('0'+month).slice(-2) + '-' + ('0'+date).slice(-2);
}

function draw( holiday, schedule ) {
	let title = '<span id="prev-month">＜</span>　';
	title += year + '年' + (month+1) + '月';
	title += '　<span id="next-month">＞</span>';
	title += '<div id="youbi"><div>日</div><div>月</div>';
	title += '<div>火</div><div>水</div><div>木</div>';
	title += '<div>金</div><div>土</div></div>';
	$('#title').html(title);

	let html = '';
	const firstDay = new Date(year, month, 1);
	for(let i=1; i<=42; i++) {
		let day = new Date(year, month, i-firstDay.getDay());
		let strDate = dateFormat(day);
		let m = day.getMonth();
		let d = day.getDate();
		let s = d;
		let className = 'day';
		if (i%7 == 1) className += ' sunday';
		if (i%7 == 0) className += ' saturday';
		if (m != month) className += ' other-month';
		
		for(let date in holiday) {
			if (date == strDate) {
				s += '&nbsp;<span class="holiday-text">' + holiday[date] +  '</span>';
				className += ' holiday';
			}
		}
		for(let date in schedule) {
			if (date == strDate) {
				s += '<div class="schedule-text">' + schedule[date] +  '</div>';
			}
		}
		html += '<div class="' + className + '" ';
		html += 'id="'+ strDate + '">'; 
		html +=	s;
		html += '</div>';
	}

	$('#calendar').html(html);

	$('#prev-month').on('click', function() {
		drawCalendar( new Date(year, month-1, 1) );
	});

	$('#next-month').on('click', function() {
		drawCalendar( new Date(year, month+1, 1) );
	});

	$('.day').on('click', function() {
		windowOpen($(this).prop('id'));
	});

	$('#ok-button').on('click', function() {
		windowClose();
	});
}

function windowOpen(id) {
	let url = 'calendarEdit.php?id=' + id;
	const left = (screen.width - 600) / 2;
	const top = (screen.height - 300) / 2;
	window.open(url, null, 'width=600,height=320,top=' + top + ',left=' + left);
}

function windowClose() {
	const id = $('#id').val();
	let content = $('#content').val();
	content = content.replace(/\n/g, '<br>');
	
	const ajaxParam = {
		url: 'scheduleUpdate.php',
		type: 'get',
		datatype: 'text',
		data: {id:id, content:content}
	}
	$.ajax(ajaxParam)
		.done( function(txt) {
			window.opener.console.log(txt);
			let ary = id.split('-');
			let year = parseInt(ary[0])
			let month = parseInt(ary[1])-1;
			window.opener.drawCalendar( new Date(year, month, 1) );
			self.close();
		});
}
