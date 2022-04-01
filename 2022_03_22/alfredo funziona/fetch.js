let totale = 0;

// let a = document.getElementById("button");
// a.disabled = false;
fetch("studenti.php")
  .then((r) => r.json()) 
  .then((b) => preset(b)); // prima ottengo il totale


function preset(z) {
  totale = z.totale;
  let l = document.getElementById("lista");
  for (let i = 1; i <= totale; i++) {
    let o = document.createElement("option");
    o.textContent = i.toString();
    o.value = i.toString();
    console.log(o);
    l.appendChild(o);
  }
  l.addEventListener("input", provafetch);
  l.disabled = false;
}

function provafetch(e) {
  fetch("mytest.php", 
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


function mostra(s) {
  document.getElementById("nome").textContent = s.nome;
  document.getElementById("cognome").textContent = s.cognome;
  document.getElementById("eta").textContent = s.eta;
  document.getElementById("interessi").textContent = s.interessi;
}

function mostraErrore(msg) {
  document.getElementById("nome").textContent = "";
  document.getElementById("cognome").textContent = "";
  document.getElementById("eta").textContent = "";
  document.getElementById("interessi").textContent = "";
  // Cercare una funzione che forzi il refresh della videata altrimenti bloccata dall'esecuzione dell' alert.
  document.getElementById("message_area").textContent = msg;
}


