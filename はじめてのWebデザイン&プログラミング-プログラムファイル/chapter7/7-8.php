<?php
	$f = 'fluits.txt';
	$str = file_get_contents($f);
	$str = str_replace("\n", '<br>', $str);
	print $str;

	// fluits.txt の改行コードを<br>に変換して内容が表示される 。
	// 出力結果は以下の通り。
	// apple
	// orange
	// banana
?>