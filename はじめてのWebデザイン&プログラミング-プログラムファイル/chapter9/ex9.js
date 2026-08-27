function draw() {
	var container = document.getElementById('container');
	var w = container.offsetWidth;
	var h = container.offsetHeight;
	var elem = document.getElementById('canvas');
	elem.width = w;
	elem.height = h;

	var ctx = elem.getContext('2d');
	ctx.clearRect(0, 0, w, h);

	ctx.beginPath();
	for(var i=0; i<10; i++) {
		var x = 50+i*100;	
		var y = 100+i*30;
		if (i==0) {
			ctx.moveTo( x, y );
		}
		else {
			ctx.lineTo( x, y );
		}
		ctx.lineTo( x+100, y );
	}
	ctx.stroke();

	
	for(var i=0; i<10; i++) {
		ctx.beginPath();
		ctx.arc( 100+i*100, 50+i*30, 30, 0, Math.PI*2, false );
		ctx.stroke();
	}
}