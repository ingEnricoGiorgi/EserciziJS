<?php

 $servername = "localhost";
 $username = "root";
 $password = "";
 $dbname = "javascript";
 // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
 
 // Check connection
 if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
 }


$data=$_GET;
//$data="val";
header('Content_Type: application/json; charset=utf-8');
echo json_encode($data);

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACCESSO AL DB</title>
    <script>
         const TOT = 5
         function tryfetch() {
        fetch("mytest.php?" + new URLSearchParams(
          {id: Math.floor(Math.random() * TOT) + 1}))
          .then(r => r.json())
          .then(b => console.log(b))
      }
    </script>
</head>
<body>
    <button onclick="tryfetch()">Click</button>
</body>
</html>