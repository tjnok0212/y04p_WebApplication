function calc() {
	var form = document.form1;
	var a = parseInt(form.text_a.value);
	var b = parseInt(form.text_b.value);
	var v = form.keisan.value;
	var ret;
	switch(v) {
		case '足し算' :
			ret = a + b;
			break;
		case '引き算' :
			ret = a - b;
			break;
		case '掛け算' :
			ret = a * b;
			break;
		case '割り算' :
			ret = a / b;
			break;
	}
	var elem = document.getElementById('kekka');
	elem.style.color = form.color.value;
	elem.style.fontSize = '20px';
	if (form.big.checked) {
		elem.style.fontSize = '40px';
	}
	elem.innerHTML = ret;
}