<?php
	$str = 'kumamon' . "\n";
	file_put_contents('character.txt', $str, FILE_APPEND);
	// 実行後
	// character.txtにkumamon（改行）が追加される。
?>
	