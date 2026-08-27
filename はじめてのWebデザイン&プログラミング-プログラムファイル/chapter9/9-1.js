function draw() {
	var elem = document.getElementById('canvas');
	var w = elem.width;
	var h = elem.height;
	
	var ctx = elem.getContext('2d');
	ctx.clearRect(0, 0, w, h);

	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, w, h);
	
	ctx.fillStyle = 'deepskyblue';
	ctx.fillRect(50, 50, 300, 150);

	ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
	ctx.fillRect(150, 100, 300, 150);

	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 10;
	ctx.strokeRect(150, 100, 300, 150);

	ctx.strokeStyle = 'rgb(0,0,0)';
	ctx.lineWidth = 10;
	ctx.strokeRect(250, 150, 300, 150);
}