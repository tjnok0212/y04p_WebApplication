function main() {
	for (var n=0; n<5; n++) {
		document.write(n);
		if (n%2 == 0) {
			document.write(':偶数<br>');
		}
		else {
			document.write(':奇数<br>');
		}
	}
}