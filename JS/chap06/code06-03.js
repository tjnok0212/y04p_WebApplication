function goukei() {
	var a = document.getElementById('text-a').value;
	var b = document.getElementById('text-b').value;
	var ret = parseInt(a) + parseInt(b);
	document.getElementById('goukei').innerHTML = ret;
}