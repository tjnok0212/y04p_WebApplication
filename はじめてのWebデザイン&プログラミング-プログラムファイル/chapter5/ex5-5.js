var data = {
	'A0001' : { kokugo:75, syakai:58, suugaku:92, rika:83, eigo:76 },
	'A0002' : { kokugo:60, syakai:65, suugaku:80, rika:75, eigo:70 },
	'A0003' : { kokugo:76, syakai:75, suugaku:77, rika:76, eigo:75 }
};

// A0003の学生の理科(rika)の点数は？
document.write('A0003の学生の理科の点数：');
document.write( data['A0003'].rika+ '点<br>');

// A0003の学生の５教科の合計点は？
var total = 0;
for (var subject in data['A0003']) {
	total += data['A0003'][subject];
}
document.write('A0003の学生の５教科の合計点：');
document.write(total + '点<br>');

// 出力結果
// A0003の学生の理科の点数：76点
// A0003の学生の５教科の合計点：379点
