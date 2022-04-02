<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "javascript";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_errno) {
    die("Connessione in errore: " . $conn->connect_error);
}


$sql = "SELECT MAX(id) AS totale FROM allievi";
$stmt = $conn->prepare($sql);
//$stmt->bind_param("i", $_GET[]);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc(); 
// restituisce una riga alla volta il nome dei campi del db
header('Content-Type: application/json');
echo json_encode($data);

?>