<?php
	$ary = array();
	foreach(file('contest.csv') as $line) {
		$data = explode(',', trim($line));
		array_push($ary, $data);
	}
	print json_encode($ary, JSON_UNESCAPED_UNICODE);   
?>