<?php
	$a = func(5);
	print $a . ' ';
	$b = func(20);
	print $b;

	function fun($a) {
		if ($a<10) {
			$a = -$a;
		}
		return $a * 2;
	}
?>