<?php
	$a = 100;
	if (isset($_GET['a'])) {
		$a = intval($_GET['a']);
	}
	$x = 9;
	if (isset($_GET['x'])) {
		$x = intval($_GET['x']);
	}
	$str = 'CCC' . ($a + $x);
	print $str;

	// localhost/9-3.php では、CCC109と表示される。
	// localhost/9-3.php?a=200&x=30 とすると、CCC230と表示される。
?>