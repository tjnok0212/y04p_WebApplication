function oshite1() {
	var f = document.getElementById("color");
	if (f.innerHTML=='ブルー') {
		f.innerHTML = 'ホワイト';
	} else {
		f.innerHTML = 'ブルー';
	}
}

/*
* HTML
* onclick属性 : クリックされたときに行うメソッドを指定している
* 
* JavaScript
* document.getElementById( <ID名> ) : IDが<ID名>の要素を変数 f に参照渡しする
* innerHTML : タグの内側の値のプロパティ
*/