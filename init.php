<?php 
/**
 * 2010-2-18 22:05:30 初始化表
 */
require('include/common.php');

if( isset($_GET['dbname']) ){
	$dbname=Request('dbname');
	//显示位置
	$i=0;
	$j=0;
	$int_top=0;
	$int_left=0;
	
		
	$MyDatabase=new Database($dbname);
	$MyDatabase->SqlStr='SHOW TABLES;';
	if ($MyDatabase->Query ()) {
		$DB_Record_Arr = $MyDatabase->ResultArr;
		foreach ( $DB_Record_Arr as $DB_Record ) {
		
			//判断此dbname和tbl是否存在在数据库中，不存在既可以添加
			$MyDatabase_t=new Database();
			$MyDatabase_t->SqlStr='SELECT `id` FROM `'.DB_TABLE_PRE . 'tbls` WHERE `dbname`=\''.$dbname . '\' AND `tbl`=\'' .$DB_Record[0] . '\';';
//			echo $MyDatabase_t->SqlStr;
			if ($MyDatabase_t->Query ()) {
				$refresh_msg	= '[<font color=green>'.$DB_Record[0].'</font>]存在，不进行添加。<br />';
			}else {
				if ($i==6){
					$i=0;
					$j++;
				}
				$int_top= 200 * $j + 10;
				$int_left=400 * $i + 10; 
				$i++;
				
				//---------------数据库名--表名----------头--------左
				$ArrField=array('dbname', 'tbl',				'top',		'left');					
				$ArrValue=array($dbname,	$DB_Record[0], $int_top, $int_left);
					
				$MyDatabase1=new Database();
				if($MyDatabase1->Insert('tbls', $ArrField, $ArrValue)){
					$refresh_msg	= '[<font color=red>'.$DB_Record[0].'</font>]，添加成功。<br />';
				}else {
					$refresh_msg	= '[<font color=blue>'.$DB_Record[0].'</font>]，添加失败。<br />';
				}
			}
			echo $refresh_msg;						
		}
	}
	
	echo '<a target="_blank" href="index.php?dbname='.$dbname.'">点击这里查看结构图</a>';
	require('include/debug.php');
}
?>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

初始化需要显示的表：
<form name="selectFrm">
		需要初始化的表：<input type="text" name="dbname"><input type="submit">
</form>