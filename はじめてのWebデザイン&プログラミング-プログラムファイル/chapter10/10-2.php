<?php
	date_default_timezone_set('Asia/Tokyo');
	$obj = array();
	foreach(file('10-1.csv') as $line) {
		$ary = explode(',', trim($line));
		list($date, $name) = explode(',', trim($line));
		$date = date('Y-m-d', strtotime( $date ));
		if ($date>=$_GET['start'] && $date<=$_GET['end']) {
			$obj += array($date=>$name);
		}
	}
	print json_encode($obj, JSON_UNESCAPED_UNICODE);  
?>