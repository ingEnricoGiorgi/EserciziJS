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
   /* table.innerHTML = "<tr><td>123</td><td>456</td></tr>";
 let el=  document.createElement('td');
 let text=document.createTextNode(dataTable[i][k]);
el.appendChild(text);
   
    let d= document.getElementsByTagName("body")[0]; //restituisce un array l'elemnto 0 dei div
    let o=b.getAttribute(onload);   
    let a=d.getAttribute('prova');
*/
    document.getElementsByTagName("body")[0].appendChild(table);
    
    


     
}
/*
let d=document.getElementsByTagName("body");
     let a =d.getAttribute("onload")
     alert(a)  
     */