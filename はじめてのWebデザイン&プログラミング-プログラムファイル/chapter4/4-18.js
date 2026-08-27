var str = 'Hello World';
var a = str.toUpperCase();
var b = str.toLowerCase();
var num = 15;
var c = num.toString();         // c = "" + num; と同じ
var str = '16.8';
var d = parseInt(str);
var e = parseFloat(str);
document.write('a=' + a + ', b=' + b + ', c=' + c + ', d=' + d + ', e=' + e);   
//「a=HELLO WORLD, b=hello world, c=15, d=16, e=16.8」 と表示される  
