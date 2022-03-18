<?php 
  $data = ["restituisco", "i parametri ricevuti", $_GET ];
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($data);
?>
