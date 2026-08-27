function oshite2() {
	var f = document.getElementById('color');
	if (f.innerHTML=='ブルー') {
		f.innerHTML = 'ホワイト';
		f.style.backgroundColor = 'white';
		f.style.left = '200px';
	}
	else {
		f.innerHTML = 'ブルー';
		f.style.backgroundColor = '#7dcdf3';
		f.style.left = '0px';
	}
}