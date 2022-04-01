<?php
$s="localhost";
$u="root";
$p="";
$d="javascript";
$conn = new mysqli($s, $u, $p, $d);
if ($conn->connect_errno) {
  die("Connessione in errore: " . $conn->connect_error);
}
//$data = $_GET["id"];
$sql="SELECT * FROM allievi WHERE id=?";
$stmt=$conn->prepare($sql);
$stmt->bind_param("i",$_GET["id"]); //integer
$stmt->execute();
$result=$stmt->get_result();
$data=$result->fetch_assoc(); //una riga alla volta, -> li collega qui ai campi del db
header('Content-Type: application/json');
//specifico formato json
//lo passo tramite fetch e converto in json su prova.js
echo json_encode($data);
?>
