function tryAll(){
    fetch("mytest3.php?")
    .then(r => r.text())
    .then(b => mostraTutto(b))
}
function mostraTutto(a){
    //alert(JSON.parse(a))
    let all=JSON.parse(a)
    document.getElementById('nome').value=all[1].nome
    document.getElementById('cognome').value=all[2].cognome
    document.getElementById('anni').value=all[3].anni
}
