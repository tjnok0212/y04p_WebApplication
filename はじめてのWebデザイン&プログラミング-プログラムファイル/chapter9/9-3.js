function draw() {
	var container = document.getElementById('container');
	var width = container.offsetWidth;
	var height = container.offsetHeight;

	var canvas = document.getElementById('canvas');
	canvas.width = width;
	canvas.height = height;

	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, width, height);
	
	ctx.fillStyle = 'blue';
	ctx.fillRect(50, 50, width-100, height-100);
}