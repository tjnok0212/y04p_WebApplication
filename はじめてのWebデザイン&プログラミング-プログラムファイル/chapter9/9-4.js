var data = [5.7, 7.1, 10.6, 15.7, 20.2, 23.6, 27.3, 28.2, 24.9, 19.1, 13.1, 7.8];　
							// 気温の配列
var x0, y0, sx, sy;			// グローバル変数

function draw() {
	var container = document.getElementById('container');
	var width = container.offsetWidth;
	var height = container.offsetHeight;
	var canvas = document.getElementById('canvas');
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, width, height);
	ctx.font = '25px Arial';
	ctx.textBaseline = 'top';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';
	ctx.fillText('熊本市の平均気温', width/2, 20);// タイトルを描画
	x0 = 100;					// グラフの横線の左側位置
	y0 = height - 80;			// グラフの下の位置
	sx = (width-200) / 12;		// スケール（X方向）
	sy = (height-150) / 40;		// スケール（Y方向）
	drawHorizontalLine(ctx, width);	// 温度の横線を描画
	drawTemperature(ctx, 'blue', 5);	// 気温を描画
	drawMonth(ctx);				// 月の名称を描画
}
// 温度の横線を描画の関数を定義
function drawHorizontalLine(ctx, width) {
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'gray';
	ctx.textBaseline = 'middle';
	ctx.fillStyle = 'gray';
	ctx.font = '20px Arial';
	for(i=0; i<=40; i+=10) {	// 温度0から40度まで数値と横線を作図
		var y = y0 - i*sy;
		ctx.beginPath();
		ctx.moveTo(x0, y);		
		ctx.lineTo(width-x0, y);	// 横線を描画
		ctx.stroke();
		ctx.textAlign = 'right';
		ctx.fillText(i, x0, y);		// 温度の文字列を描画
	}
}
// 月名の描画関数を定義
function drawMonth(ctx) {
	ctx.fillStyle = 'gray';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'top';
	ctx.font = '20px Arial';
	for (m=0; m<12; m++) {		// 月の名称の文字列を描画
		var x = x0 + (m+0.5) * sx;
		var y = y0 + 10;
		ctx.fillText((m+1) + '⽉', x, y);
	}
}
// 折れ線グラフ描画の関数を定義
function drawTemperature(ctx, color, lineWidth) {
	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = color;
	ctx.beginPath();
	for (m=0; m<12; m++) {			// 折れ線の作図
		var x = x0 + (m+0.5) * sx;
		var y = y0 - data[m] * sy;
		if (m==0) ctx.moveTo(x, y);	// 移動
		else      ctx.lineTo(x, y);	// 作図
	}
	ctx.stroke();
}