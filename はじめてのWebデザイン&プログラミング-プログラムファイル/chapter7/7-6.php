<?php
	$ary3 = array('name'=>'山田太郎', 'age'=>21, 100=>'ABC');
	foreach($ary3 as $data) {
		print $data . ' ';
	}
	print '<br>';

	$ary4 = ['name'=>'田中一郎', 'age'=>22];
	$ary4 += ['tel'=>'090-111-XXXX'];
	foreach($ary4 as $key=>$data) {
		print $key . ' ' . $data . ' ';
	}
	print '<br>';
?>