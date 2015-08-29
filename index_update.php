<?php 
/**
 * 2010-2-18 22:05:30 初始化表
 */
require('include/common.php');

if( isset($_GET['dbname']) ){
	$str_dbname	= Request('dbname');
	$str_tbl		= Request('tbl');
	$int_top		= Request('top');
	$int_left		= Request('left');
	
				
	//---------------头--------左
	$ArrField=array('top',		'left');					
	$ArrValue=array($int_top, $int_left);
				
	$MyDatabase=new Database();
	if($MyDatabase->Update('tbls', $ArrField, $ArrValue, '`dbname`=\''.$str_dbname . '\' AND `tbl`=\'' .$str_tbl . '\'' )){
		echo 'true';
	}
}
?>