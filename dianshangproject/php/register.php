<?php
	include "CURD.php";
	
	$db = new CURD();
	
	$account = $_POST["account"];
	$password = $_POST["password"];
	
	$sql = "insert into person(account,password) values('". $account ."','". $password ."')";
	
	$result = $db -> insert($sql);
	
	$obj = array(
		"info" => "注册成功！",
		"status" => 1
	);
	
	echo json_encode($obj);

?>