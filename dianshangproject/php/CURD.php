<?php 
	/**
		数据库 增删改查 接口
		@author  zengzuozuo
		@update 2017/03/15
	*/
	class CURD {
		public $mysql_server_name='localhost'; //服务器
		public $mysql_username='root'; //用户名
		public $mysql_password='root'; //密码
		public $mysql_database='test'; //数据库名

		/*
			初始化，连接数据库，sql执行
		*/
		function init($sql){
			//连接数据库
			$conn = mysql_connect($this->mysql_server_name,$this->mysql_username,$this->mysql_password) or die("数据库连接错误") ; 
 			
 			//数据库输出编码
			mysql_query("set * 'utf8'"); 
			//打开数据库
			mysql_select_db($this->mysql_database);
			//执行sql
			$result = mysql_query($sql,$conn); 
			//关闭MySQL连接
			mysql_close($conn);
			return $result;
		}

		/*
			数据查询
		*/
		function find($sql){
			//查询所有用户
			$result = $this->init($sql);
			$arr = array();
			while($row = mysql_fetch_array($result))
			{
				$new = array();
				foreach($row as $k => $v){
					if(!is_numeric($k)){
						$new[$k] = $v;
					}
				}
				$arr[] = $new;
			}
			return $arr;
		}

		/*
			删除数据
		*/
		function delete($sql){
			return $this->init($sql);
		}

		/*
			插入数据
		*/
		function insert($sql){
			return $this->init($sql);
		}

		/*
			更新数据
		*/
		function update($sql){
			return $this->init($sql);
		}
	}
?>