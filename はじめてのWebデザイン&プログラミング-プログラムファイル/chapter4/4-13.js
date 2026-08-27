var c = 100;
var b = sample1(3, 5);
document.write(b + ' ' + c);  // 「15 15」と表示される。

function sample1(arg1, arg2) {
	c = arg1 * arg2;
	return c;
}