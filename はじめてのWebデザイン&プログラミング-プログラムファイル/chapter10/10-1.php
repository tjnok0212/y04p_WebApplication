<?php
	foreach(file('10-1.csv') as $line) {
		list($date, $name) = explode(',', trim($line));
		if ($date == $_GET['date']) {
			print $name;
			exit();
		}
	}
?>