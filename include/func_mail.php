<?php
//发送邮件程序，如果空间不支持，将自动
$sendMailType = $site["emailStation"] == "smtp" ? 1 : 0;
$mailSMTP = $site["emailServer"];
$mailPort = $site["emailPort"];
$mailUser = $site["emailUser"];
$mailPass = $site["emailPass"];
if($sendMailType == 1) {
	$fp = fsockopen($mailSMTP,$mailPort,&$errno,&$errstr,30);
	fputs($fp, "EHLO www.qinggan.net\r\n");
	fputs($fp, "AUTH LOGIN \r\n");
	fputs($fp, base64_encode($mailUser)." \r\n");
	fputs($fp, base64_encode($mailPass)." \r\n");
	fputs($fp, "MAIL FROM: $mailFrom\r\n");
	fputs($fp, "RCPT TO: $toUser\r\n");
	fputs($fp, "DATA\r\n");
	$toSend  = "From: $mailFrom\r\n";
	$toSend .= "To: Www.Zerolone.com <".$toUser.">\r\n";
	$toSend .= "Subject: ".$subject."\r\n\r\n".$message."\r\n.\r\n";
	fputs($fp,$toSend);
	fputs($fp,"QUIT\r\n");
	fclose($fp);
} else {
	@mail($toUser,$subject,$message, "From: Www.Zerolone.Com <".$mailFrom.">");
}
?>