<?php
	$data = 100;
	if (isset($_GET['data'])){
		$data = intval($_GET['data']);
	}
	print $data * 5;
	// 出力結果
	// ct9-3.phpの場合、500
	// ct9-3.php?data=10の場合、50
?>
	