<?php 
/**
 * 2010-2-18 12:10:42
 */


require('include/common.php');
define('PAGENAME','index.php');
require(PAGENAME.'.php');

//读取数据库结构

//$str_dbname='phpwind';
$str_dbname=Request('dbname', 'comsenz');

$str_tbl_name='';						//表名
$str_tbl_name_comment='';		//表说明

//  var_dump($str_dbname);

//显示位置
$int_top=0;
$int_left=0;

$MyDatabase=new Database();
//----------------------------0----------1----------2-------3
$MyDatabase->SqlStr='SELECT `tbl`, `top`, `left` FROM `'. DB_TABLE_PRE .'tbls` WHERE `dbname`=\'' . $str_dbname . '\';';

if ($MyDatabase->Query ()) {
	$DB_Record_Arr = $MyDatabase->ResultArr;
	foreach ( $DB_Record_Arr as $DB_Record ) {
		$str_tbl_name=$DB_Record[0];
//		$str_tbl_name_comment=$DB_Record[1];
		$int_top=$DB_Record[1];
		$int_left=$DB_Record[2];

		$MyDatabase2=new Database($str_dbname);
		$MyDatabase2->SqlStr='SHOW TABLE STATUS LIKE \''.$str_tbl_name . '\';';
//		echo $MyDatabase2->SqlStr;
		if ($MyDatabase2->Query()){
			$DB_Record1 = $MyDatabase2->ResultArr [0];
			$str_tbl_name_comment=$DB_Record1['Comment'];			
		}
		
		printf('<table class="tbl" style="top:%dpx;left:%dpx;" alt="dbname=%s&tbl=%s">', $int_top, $int_left, $str_dbname, $str_tbl_name);		
		printf("<caption>&nbsp;&nbsp;%s(%s)&nbsp;&nbsp;</caption>", $str_tbl_name, $str_tbl_name_comment);		
//		printf("<thead><nobr>&nbsp;&nbsp;%s(%s)&nbsp;&nbsp;</nobr></caption>", $str_tbl_name, $str_tbl_name_comment);		
		echo '  <thead>';
		echo '    <tr>';
		echo '      <th>字段</th>';
		echo '      <th>类型</th>';
		echo '      <th width="30">主键</th>';
//		echo '      <th>其他</th>';
		echo '      <th>说明</th>';
		echo '    </tr>';
		echo '  </thead>';

		$MyDatabase_s=new Database($str_dbname);
		$MyDatabase_s->SqlStr='SHOW FULL FIELDS FROM '. $DB_Record[0] .';';
//		echo $MyDatabase1->SqlStr;
		if ($MyDatabase_s->Query ()) {
				$DB_Record_Arr = $MyDatabase_s->ResultArr;
				foreach ( $DB_Record_Arr as $DB_Record ) {
					echo '<tr>';
					printf('<td>%s</td>', $DB_Record['Field']);	

					//将unsigned替换成un					
					printf('<td>%s</td>', str_replace('unsigned', 'un',  $DB_Record['Type']));		
					printf('<td>%s</td>', $DB_Record['Key']);		
//					printf('<td>%s</td>', $DB_Record['Extra']);		
					printf('<td width="110">%s</td>', $DB_Record['Comment']);							
					echo '</tr>';
				}				
		}
		
		echo '</table>';
		echo "\n";
//		break;

//		echo '<hr color=red>';
	}
}


//require('include/debug.php');
?>