function oshite2() {
	var f = document.getElementById('color');
	if (f.innerHTML == 'ブルー') {
		f.innerHTML = 'ホワイト';
		f.style.color = '#000';
		f.style.backgroundColor = '#fff';
		f.style.left = '200px';
	} else {
		f.innerHTML = 'ブルー';
		f.style.color = '#e0e0e0';
		f.style.backgroundColor = '#00f';
		f.style.left = '0px';
	}
}