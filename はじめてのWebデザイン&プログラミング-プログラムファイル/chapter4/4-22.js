for(var n=0; n<10; n++) {
	document.write(n);
	if (n%2 == 0) {			// a%b：aをbで割ったときの余り
		document.write(':偶数<br>');
	}
	else {
		document.write(':奇数<br>');
	}
}