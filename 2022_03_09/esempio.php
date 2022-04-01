<?php
//phpinfo();
$conn=null;
$id=$_GET['id'];
$conn=mysqli_connect("localhost","root","","esempioJS");

if (! mysqli_connect_errno() ) {
    // print "Connessione avvenuta con successo";
    echo "connessione riuscita";
 }else{
     echo "ERRORE in Connessione a MySQL: " . mysqli_connect_error();
     return false;
 }/*
if(!inserisci()){
   echo "query non inserita";
}*/
$result=leggi($id);
while ($row = mysqli_fetch_assoc($result)) {
    $id=$row["id"];
    $nome = $row["nome"];
    $cognome = $row["cognome"];
    echo "<br>";
    echo json_encode($row);
}
echo "<br>";
echo  "id: ".$id." nome: ". $nome ." cognome: ".$cognome;





function leggi($id){
    global $conn;
    $query = "SELECT * FROM alunni WHERE id=$id";
    $result = mysqli_query($conn, $query);
    if (! $result){
        print ("Errore nella Query:" . mysqli_error($conn));
        return false;
    }else
    return  $result;
}

function inserisci(){
    global $conn;
    $query = "INSERT INTO alunni (nome,cognome) VALUES ('andrea','ribuoli')";
    $result = mysqli_query($conn, $query);
    if (! $result){
        print ("Errore nella Query:" . mysqli_error($conn));
        return false;
    }else
    return true;
}
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>CIAO</p>
</body>
</html>