var p = 100, q = 200;
var r = test1(100, p, q);
document.write( r );

function test1(x, y, z) {
	var a=10;
	a = a + x + y + z;
	return a;
}