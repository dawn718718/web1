<?php
$conn = mysql_connect("localhost","root","1111");
mysql_set_charset("utf8",$conn);
mysql_select_db("zdb");

$query = "SELECT COUNT(*) FROM users where id='$_POST[id]'";
$rs1 = mysql_query($query,$conn);
$row = mysql_fetch_array($rs1);
if($row[0]==1){

?>
<script>
alert ("이미 존재한다");
location.href="join.php";
</script>

<?
exit;
}


$sql = "INSERT INTO users (userid,userpw,name) VALUES ('$_POST[id]','$_POST[pw]','$_POST[name]')";
$rs2 = mysql_query($query,$conn);


if ($rs2){
    
    ?>
<script>
    alert("가입성공");
    location.href="login.html";
</script>
    <?
} else {
    echo "실패했다";
    exit;
}


mysql_close($conn);
?>

