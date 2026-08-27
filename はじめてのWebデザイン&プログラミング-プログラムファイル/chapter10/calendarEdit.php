<?php
	$id = $_GET['id'];
	list($year, $month, $day) = explode('-', $id);

	function getSchedule($date) {
		$pdo = new PDO('sqlite:calendar.db');
		$stmt = $pdo->prepare('SELECT date, title FROM schedule WHERE date = :date');
		$stmt->bindValue(':date', $date, PDO::PARAM_STR);
		$stmt->execute();
		$result = $stmt->fetchAll();
		foreach($result as $row) {
			return $row['title'];
		}
		return '';
	}	
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="calendarEdit.css">
		<script src="jquery-3.6.0.min.js"></script>
		<script src="calendar.js"></script>
	</head>
	<body>
		<center>
		<input type="hidden" id="id" value="<?php print $id; ?>">
		<h2><?php print $year .'年' . intval($month) . '月' . intval($day) . '日'; ?></h2>
		<textarea id="content"><?php
			$content = getSchedule($id);
			print str_replace('<br>', "\n", $content);
			?></textarea>
		<br><br>
		<div id="ok-button"> O K </div>
		</center>
	</body>
</html>
