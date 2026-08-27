<?php
	if (isset($_GET['data'])) {
		$data = $_GET['data'] . "\n";
		file_put_contents('fluits.txt', $data, FILE_APPEND);
		print '追加しました。';
	}
	else {
		print 'dataが設定されていません。';
	}
?>
