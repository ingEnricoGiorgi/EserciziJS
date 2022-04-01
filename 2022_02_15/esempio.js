function saluto(){
    alert('ciao dal javascript');
}

function creaTabella(){

    let table = document.createElement('table');
    row= table.insertRow(0);
    let tb= table.createTBody();
    r=tb.insertRow(0);
    r.insertCell(0).innerHTML="uno";
    r.insertCell(1).innerHTML="uno";
    document.getElementsByTagName("body")[0].appendChild(table);
    
    


     
}
