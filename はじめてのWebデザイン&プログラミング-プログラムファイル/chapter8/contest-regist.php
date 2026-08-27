<?php
	$id = $_GET['id'];
	$name = $_GET['name'];
	$language = $_GET['language'];
	$out = $id . ',' . $name . ',' . $language . "\n"; 
	file_put_contents('contest.csv', $out, FILE_APPEND);
?>