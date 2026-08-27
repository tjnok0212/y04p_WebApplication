var a = 7;						// (1) aに7を代入
var b;							// (2) bに値は入っていない
sample1();						// (3) この行が実行されるとaは100となる
sample2(200);					// (4) この行が実行されるとaは200となる
sample3(a, 10);					// (5) 200と10を引数で渡す
								//     この段階がa=200、bは210となる
b = sample4(a, b);				// (6) 200と210が引数として渡され
								//     最終的に、bは410となる
document.write(b);

function sample1() {
	a = 100;
}

function sample2(x) {
	a = x;
}

function sample3(x, y) {
	b = x + y;
}

function sample4(arg1, arg2) {
	var c = arg1 + arg2;
	return c;
}