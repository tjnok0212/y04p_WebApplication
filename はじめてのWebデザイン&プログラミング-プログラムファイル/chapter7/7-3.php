<?php
	$a = 100;
	if (isset($_GET['a'])) {
		$a = $_GET['a'];
	}
	$str = 'BBB' . $a;
	print $str;

	// localhost/web-dp/7-2.php では、BBB100と表示される。
	// localhost/web-dp/7-2.php?a=200 とすると、BBB200と表示される。
?>