var ary = [ { toyTpe:'自家用車', price:200, color:'白色' },
			{ toyType:'ダンプカー', price:400, color:'黒色' },
        	{ toyType:'消防車', price:300, color:'赤色' } ];

document.write( 'ary[1]の車種：' + ary[1].toyType);
document.write( '　　色：' + ary[1].color + '<br>' );

var sum = 0;
for (var obj of ary) {
	sum += obj.price;
}
document.write( '合計金額：' + sum + '円<br>'); 　

// 出力結果
// ary[1]の車種：ダンプカー　　色：黒色
// 合計金額：900円