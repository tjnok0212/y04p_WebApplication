function calc() {
	// form要素の内容を取得
	var form = document.form1;
	
	// テキストボックスの値を整数型にして取得
	var a = parseInt(form.text_a.value);
	var b = parseInt(form.text_b.value);
	
	// ラジオボタンの値を取得
	var v = form.keisan.value;
	
	// 計算
	var rat;
	switch(v) {
		case '足し算':
			ret = a + b;
			break;
		case '引き算':
			ret = a - b;
			break;
		case '掛け算':
			ret = a * b;
			break;
		case '割り算':
			ret = a / b;
			break;
		case '商算':
			ret = Math.floor( a / b );
			break;
		case '除算':
			ret = a % b;
			break;
	}
	
	// ID=resultであるhtmlの要素を参照渡し
	var elem = document.getElementById('result');
	
	// スタイル変更
	elem.style.color = form.color.value;
	elem.style.fontSize = '20px';
	if (form.big.checked) { elem.style.fontSize = '40px'; }
	
	// result要素に値を代入
	elem.innerHTML = ret;
}
