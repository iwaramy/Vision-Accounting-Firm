<?php
header("Content-type:text/html;charset=utf-8");
$tittle='遠見國際會計師事務所諮詢表單';
$content=nl2br($_GET['content']);
$contents="
您的姓名:{$_GET['name']}<br>
您的聯絡電話或手機:{$_GET['tel']}<br>
您的電子信箱:{$_GET['email']}<br>
您想諮詢的內容:<br>
{$content}
<br>
<br>
";

$headers   =  'MIME-Version: 1.0'  .  "\r\n" ;
$headers  .=  'Content-type: text/html; charset=utf-8'  .  "\r\n" ;
$headers  .=  'From: 遠見國際 <speirs.kao@growdigi.com>'  .  "\r\n" ;
$headers  .=  'Cc: speirs.kao@growdigi.com'  .  "\r\n" ;

$resumlt=mail('danny.wu@visioncpa.com.tw',$tittle,$contents,$headers);
exit($resumlt);
?>