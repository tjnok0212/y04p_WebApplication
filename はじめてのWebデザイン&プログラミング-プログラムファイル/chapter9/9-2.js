function draw() {
	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;
	
	var ctx = canvas.getContext('2d');	// 初期化
	ctx.clearRect(0, 0, width, height);
	
	ctx.fillStyle = 'white';			// 領域内を白色で塗りつぶす
	ctx.fillRect(0,0, width, height);

	ctx.font = '30px Arial';			// 文字を描画
	ctx.textBaseline = 'middle';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';
	ctx.fillText('Webデザイン＆プログラミング', width/2, 40);
	
	ctx.fillStyle = 'lightgray';			// 円の描画
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.arc(200, 200, 80, 0, 2*Math.PI, false);
	ctx.fill();
	ctx.stroke();

	var points = [ 						// 多角形の描画
		{x:400, y:250}, 
		{x:500, y:150}, 
		{x:600, y:150}, 
		{x:700, y:250}, 
	];
	ctx.fillStyle = 'rgb(219, 239, 251)';
	ctx.strokeStyle = '#72c1ec';
	ctx.lineWidth = 15;
	ctx.beginPath();
	var first = true;
	for (var pt of points) {
		if (first) {
			ctx.moveTo(pt.x, pt.y);
			first = false;
		}
		else {
			ctx.lineTo(pt.x, pt.y);
		}
	}
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}