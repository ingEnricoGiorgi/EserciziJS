<?php
$s="localhost";
$u="root";
$p="";
$d="javascript";
$conn = new mysqli($s, $u, $p, $d);
if ($conn->connect_errno) {
  die("Connessione in errore: " . $conn->connect_error);
}

// $data = ["restituisco", "i parametri ricevuti", $_GET];
// $data = $_GET["id"];
$sql = "SELECT * FROM allievi WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $_POST["id"]);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();
if (is_null($data)) {
    //die(json_encode("Record " . $_GET["id"] . " non trovato"));
    http_response_code(204);
    die("Non trovato");
}
header('Content-Type: application/json');
echo json_encode($data);

?>
