var data = {
	A0001 : { name:'佐藤一郎', age:21},
	A0002 : { name:'山田花子', age:20},
	A0003 : { name:'鈴木太郎', age:19},
	A0004 : { name:'田中愛子', age:22},
};

function dispList() {
	var html = '';
	for (var key in data) {
		html += key + '：';
		html += data[key].name + '、';
		html += data[key].age + '歳<br>';
	}
	document.getElementById('list').innerHTML = html;
}