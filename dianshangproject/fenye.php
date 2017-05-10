<?php
	include "CURD.php";
	
	$page = $_GET["page"];
	
	$db = new CURD();
	
	$sql = "select src,title,text,info,status from ad_info";

	$result = $db -> find($sql);
	
	shuffle($result);
	
	$len = count($result);
	$sum_page = ceil($len / 30);
	
	$arr = array_slice($result, ($page-1)*30, 30);
	
	$obj = array(
		"data" => $arr,
		"sum_page" => $sum_page,
		"now_page" => $page 
	);
	
	echo json_encode($obj);
	
?>