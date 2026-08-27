var obj = {name:'太郎', age:21, tel:'0X0-1111-2222'};
obj[0] = 100;
obj['x'] = 200;
obj.y = 300;
document.write( obj.name + ' ' );
document.write( obj['tel'] + '<br>' );
document.write( obj[0] + ' ' );
document.write( obj.x + ' ' );
document.write( obj['y'] );
// 出力結果
// 太郎 090-1111-2222
// 100 200 300