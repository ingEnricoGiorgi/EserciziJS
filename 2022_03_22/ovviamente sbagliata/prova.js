let totale= 0;
  
/*
let btn=document.getElementById("hitme");
btn.disabled=false;
*/

fetch("countMax.php")
  .then(r => r.json())
  .then(b => preset(b)) //<-prima ottengo il totale

function preset(z){
  totale=z.massimo;
  let sel=document.getElementById("lista");
  for(let i=1; i<=totale; i++){
    let opt=document.createElement('option');
    opt.textContent=i.toString();
    opt.value=i.toString();
    console.log(opt);
    sel.appendChild(opt);
  }
  sel.addEventListener("input", tryfetch2);
  sel.disabled=false;
}

function tryfetch2(e) {
  fetch("allievi.php",
   {method:"POST",body: new URLSearchParams({id: e.target.value}) })

    .then((r) => {
      if (r.ok && r.headers.get("Content-Type") === "application/json") {
        return r.json();
      } else {
        if (r.status === 204) {
          throw new Error("Contenuto inesistente");
        }
        throw new Error("Comportamento imprevisto");
      }
    }) // Promise: conversione in formato json
    .then((b) => mostra(b)) // Promise: richiama il mostra */
    .catch((e) => mostraErrore(e.toString())); // chiama l'errore
}

function mostra(hs){
    document.getElementById("nome").textContent=hs.nome;
    document.getElementById("cognome").textContent=hs.cognome;
    document.getElementById("eta").textContent=hs.eta;
    document.getElementById("interessi").textContent =hs.interessi; 
  }

    function mostraErrore(msg) {
      document.getElementById("nome").textContent = "";
      document.getElementById("cognome").textContent = "";
      document.getElementById("eta").textContent = "";
      document.getElementById("interessi").textContent = "";
      // Cercare una funzione che forzi il refresh della videata altrimenti bloccata dall'esecuzione dell' alert.
      document.getElementById("message_area").textContent = msg;
    }
      