<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		素数かどうかを判定したい数を入力してください。<br><br>
		<form action="7-12.php" method="POST">
		<input type="text" name="primeNumber">
		<input type="submit" value="判定">
		</form><br>
<?php
		if (isset($_POST['primeNumber'])) {
			$num = intval($_POST['primeNumber']);
			if (primeNumber($num)) {
				print $num . 'は素数です。';
			}
			else {
				print $num . 'は素数ではありません。';
			}
		}
		function primeNumber($num) {
			if ($num<=1) return false;
			$flag = true;
			for($i=2; $i<$num; $i++) {
				if ($num % $i == 0) {
					$flag = false;
					break;
				}
			}
			return $flag;
		}
?>
	</body>
</html>