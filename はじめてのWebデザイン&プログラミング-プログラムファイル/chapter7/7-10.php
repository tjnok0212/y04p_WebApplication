<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		学生情報<br>
<?php
	$ary = file('student.csv');
	foreach($ary as $line) {
		list($id, $name, $age) = explode(',', trim($line));
		print $id . ' ' . $name . ' ' . $age . '歳<br>';
	}
?>
	</body>
</html>