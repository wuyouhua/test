<?php
	include "CURD.php";
	
	$account = $_POST["account"];
	$password= $_POST["password"];
	
	$db = new CURD();
	
	$sql = "select * from person where account = '". $account ."' and password = '". $password ."'";
	
	$result = $db -> find($sql);
	
	$obj = array(
		"info" => "用户名密码错误!",
		"status" => 0
	);
	
	if( count($result) ){
		$obj["info"] = "登录成功";
		$obj["status"] = 1;
		echo json_encode($obj);
	}else{
		echo json_encode($obj);
	}
?>