<?php $s="localhost"; 
$u="root";
$p="";
$d="javascript";
$conn = new mysqli($s, $u, $p, $d); 
if ($conn->connect_errno) { 
    die("Connessione in errore: " . $conn->connect_error); 
} 
//$data = $_GET["id"];
$sql="SELECT * FROM allievi";
$stmt=$conn->prepare($sql);
//$stmt->bind_param("i",$_GET["id"]); 
$stmt->execute();
$result=$stmt->get_result(); 
$data=[];
while($f=$result->fetch_assoc()){
    array_push($data, $f);
}

header('Content-Type: application/json'); 
//specifico formato json 
echo json_encode($data);
?>