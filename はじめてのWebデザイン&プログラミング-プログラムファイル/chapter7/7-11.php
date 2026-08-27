<?php
	if (isset($_POST['id'])) {
		$data = $_POST['id'] . ',';
		$data .= $_POST['name'] . ',';
		$data .= $_POST['age'] . "\n";
		file_put_contents('student.csv', $data,  FILE_APPEND);
	}
?>
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
		<hr>	
		<form name="form1" action="7-11.php" method="post">
		学生番号：<input type="text" name="id"><br>
		氏　　名：<input type="text" name="name"><br>
		年　　齢：<input type="text" name="age"><br>
		<input type="submit" value="追加">
		</form>
	</body>
</html>