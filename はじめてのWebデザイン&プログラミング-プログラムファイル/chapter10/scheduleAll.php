<?php
	$pdo = new PDO('sqlite:calendar.db');
	$stmt = $pdo->prepare('SELECT date, title FROM schedule');
	$stmt->execute();
	$result = $stmt->fetchAll();
	foreach($result as $row) {
		print $row['date'].' '.$row['title'].'<br>';
	}
?>