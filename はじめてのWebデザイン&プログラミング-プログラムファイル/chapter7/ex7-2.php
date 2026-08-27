<?php
	$data = 'not found';
	if (isset($_GET['data'])){
		$data = $_GET['data'];
	}
	print $data;
	// 出力結果
	// ct9-2.phpの場合、not found
	// ct9-2.php?data=ABCDの場合、ABCD
?>
	