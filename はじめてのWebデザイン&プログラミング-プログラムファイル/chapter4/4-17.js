var str = 'Hello World';
var a = str.indexOf('Wo');
var b = str.substr(3, 2);
var c = str.replace('World', 'Japan');
var d = str.replace(/o/g, '@');
document.write('a=' + a + ', b=' + b + ', c=' + c + ', d=' + d );   
//「a=6, b=lo, c=Hello Japan, d=Hell@ W@rld」 と表示される  
