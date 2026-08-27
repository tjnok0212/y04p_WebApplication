var c = 100;
var b = sample1(3, 5);
document.write(b + ' ' + c);	// 「15 100」と表示される。

function sample1(arg1, arg2) {
	var c = arg1 * arg2;
	return c;
}