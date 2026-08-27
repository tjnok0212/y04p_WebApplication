var ary = [5, -10, 3, 4, -7, 9, 0, 6, 8];
for (var i=0; i<ary.length; i++) {
	if(ary[i]<0) {
		continue;
	}
	if (ary[i]==0) {
		break;
	}
	document.write(ary[i] + ' ');
}
// 出力結果
// 5 3 4 9                  
