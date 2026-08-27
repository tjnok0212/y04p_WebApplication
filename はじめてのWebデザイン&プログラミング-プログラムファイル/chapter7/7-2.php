<?php
	$a = func(5);
	print $a . ' ';
	$b = func(20);
	print $b;

	function func($a) {
		if ($a<10) {
			$a = -$a;
		}
		return $a * 2;
	}
	// 出力結果
	// -10 40
?>