function drawCalendar() {
	var firstDay = new Date(2022, 5, 1);
	for(var i=1; i<=35; i++) {
		var d = i - firstDay.getDay();
		if (d<1 || d>30) {
			d = '';
		}
		document.write('<div class="day">' + d + '</div>');
	}
}