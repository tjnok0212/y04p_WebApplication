<?php
	$pdo = new PDO('sqlite:10-3.db');
	$pdo->beginTransaction();
	$stmt = $pdo->prepare('insert into schedule (date, title) values("2022-05-28", "プログラミング")');
	$stmt->execute();
	$pdo->commit();	
	require '10-3.php';
	print '<br>';
	$pdo->beginTransaction();
	$stmt = $pdo->prepare('update schedule set title = "プログラミング演習" where date="2022-05-28"');
	$stmt->execute();
	$pdo->commit();	
	require '10-3.php';
	print '<br>';
	$pdo->beginTransaction();
	$stmt = $pdo->prepare('delete from schedule where date="2022-05-28"');
	$stmt->execute();
	$pdo->commit();	
	require '10-3.php';

?>
