<?php
	$pdo = new PDO('sqlite:10-3.db');
	$stmt = $pdo->prepare('SELECT date, title FROM schedule');
	$stmt->execute();
	$result = $stmt->fetchAll();
	$obj = array();
	foreach($result as $row) {
		$obj += array($row['date']=>$row['title']);
	}
	print json_encode($obj, JSON_UNESCAPSED_UNICODE);  
?>