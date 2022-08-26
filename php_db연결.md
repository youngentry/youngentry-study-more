PHP DB 연결,form 데이터 전송 & 출력(mysql,mysqli,PDO)
맑고파란하늘 2019. 4. 2. 22:02
mysql 문법 사용

 

<html>
<form action='./test2.php' name='form1' method='post'>

<input type='hidden' name='id' value='test'> 

<li>아이디: <input type='text' name='user_id' size='10'>

<li>이름: <input type='text' name='name' size='10'>

<li>비밀번호: <input type='password' name='pw' size='10'>


<textarea name='memo' cols='100' rows='5'></textarea>


<input type='submit' value='전 송'>

</form>

</html>
DB 연결

<?
$connect = mysql_connect("localhost","db계정명","비밀번호");

mysql_select_db("db이름",$connect); // 연결할 db선택

if(!$connect){
	die("연결에 실패했습니다.".mysql_error());//실패하면 연결중지 
}
?>
폼으로받은 데이터를 DB에 저장하기

<?
$id = $_POST[id];
$user_id= $_POST[user_id];
$name = $_POST[name];
$pw = $_POST[pw];
$memo $_POST[memo];
$regdate = date("YmdHis", time());//날짜 , 시간
$ip = getenv("REMOTE_AEER"); // ip


//쿼리전송
$query="insert into board(id,user_id,name,pw,memo,regdate,ip)
		value('$id','$user_id','$name','$pw','$memo','$regdate','$ip')";

/*mysql_query("set names utf8",$connect); db한글문서깨질경우 추가*/

mysql_query($query,$connect);
mysql_close; // 전송끝내기
?>
 

데이터 불러오기

$query = "select *from board where id='test'"; //board 테이블의 id값이 test인 데이터를 선택

$reult = mysql_query($query,$connect); //(실행할쿼리문,db정보)

while($data = mysql_fetch_array($result)){?>	 //$data란 변수는 실행쿼리값.

<tr>
- 이름 : <?echo $data[name] ?> 
- 아이디:<?=$data[user_id]?>	
-메모 : <?=$data[memo]?>

<?}?>
mysqli 문법 사용

 

DB 연결

$connect= mysqli_connect("localhost","db계정명","비밀번호","db명");

if(!$connect)die("연결에 실패 하였습니다.".mysqli_connect_error());

mysqli_set_charset($connect,"utf8");
폼으로받은 데이터를 DB에 저장하기

<?header("content-type:text/html; charset=UTF-8");
 $id= $_POST[id];
 $user_id=$_POST[user_id];
 $name=$_POST[name];
 $pw=$_POST[pw];
 $memo=$_POST[memo];
 $regdate=date("YmdHis", time()); //날짜 , 시간
 $ip=getenv("REMOTE_ADDR"); //ip

//쿼리전송
mysqli_query($connect,"insert into bbs_1(id, user_id, name, pw, memo, regdate, ip) 

                   values('$id','$user_id','$name','$pw','$memo','$regdate','$ip')");

mysqli_query($connect);

?>
데이터 불러오기

//쿼리문으로 데이터를 불러오기

$query= "select * from board where id='test'";
$result= mysqli_query($connect,$query);
while($data= mysqli_fetch_array($result)){?>
 이름 : <?echo $data[name] ?> 
 - 아이디:<?=$data[user_id]?>
-메모 : <?=$data[memo]?>
<?}?>
PDO 문법 사용

 

DB 연결

$host_name='localhost';
$user ='계정명';
$pwd='비번';

try{
	$conn=new PDO("mysql:host=$host_name;dbname=DB명",$user,$pwd);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
	echo "Connection failed: " . $e->getMessage();
}
PDO 에선 연결실패시 오류메세지를 얻기위해 try 문을 사용함.

 

폼으로받은 데이터를 DB에 저장하기

$query="insert into tmember(user_id,pwd,name,nick_name,email)
		values(:user_id,:hash,:name,:nick_name,:email)";
$stmt = $connect->prepare($query);
$stmt->execute([':user_id'=>$user_id,':hash'=>$hash,':name'=>$name,
				':nick_name'=>$nick_name,':email'=>$email]);
보안을 위해 : 를 사용함.

 

데이터 불러오기

<?
	$stmt=$connect->prepare("select * from bbs_comment where bbs_no='$no' and replys <= 1");
	$stmt->execute();
	while($co_row=$stmt->fetch(PDO::FETCH_ASSOC)){	?>

	$co_row['user_id']
    ?>
   <?=$co_row['memo']?>
bbs_comment란 테이블의 bbs_no컬럼값이 $no이고 replys컬럼값이 1보다작거나 같은 데이터를 쓸수있다.