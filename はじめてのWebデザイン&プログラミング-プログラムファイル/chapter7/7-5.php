<?php
	$ary1 = array(10, 10.5, 'ABC');
	for($i=0; $i<count($ary1); $i++) {
		print $ary1[$i] . ' ';
	}
	print '<br>';

	$ary2 = [20, 20.5, 'DEF'];
	array_push($ary2, 'GHI');
	foreach($ary2 as $item) {
		print $item . ' ';
	}
	print '<br>';
?>
