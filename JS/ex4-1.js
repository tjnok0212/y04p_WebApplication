function main() {
	var a, b;
	a = 3;
	b = f1(a, 30);
	b += 5;
	document.write('b=' + b);
}

function f1(x, y) {
	var p = 10 + x + y;
	return p;
}