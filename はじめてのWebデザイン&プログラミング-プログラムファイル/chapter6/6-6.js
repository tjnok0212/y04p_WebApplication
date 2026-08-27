function search() {
	var txt = document.form1.txt.value;
	var cnt = txt.split('X').length - 1;
	document.getElementById('kekka').innerHTML = cnt;
}