var abc = [10, 30, 50, 40, 20, 80, 60];
var max = -999;
for ( var i=0; i<abc.length; i++) {
	if (abc[i]>max) {
		max = abc[i];
	}
}
document.write( 'max = ' + max + '<br>' );     // もっとも大きい値を表示

// 出力結果
// max = 80