for(var j=0; j<5; j++) {
	for(var i=0; i<4; i++) {
		if ( i==1 || j==2 ) {
			document.write('●');
		}
		else {
			document.write('○');
		}
	}
	document.write('<br>');		// ここで改行のみの実行します。

}