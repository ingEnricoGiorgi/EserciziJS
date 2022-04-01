


let totale= 0;
  
/*
let btn=document.getElementById("hitme");
btn.disabled=false;
*/
function preset(z){
  totale=z.totale;
  console.log(totale);
  let sel=document.getElementById("selectAllievo");
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

fetch("countMax.php")
  .then(r => r.json())
  .then(b => preset(b)) //<-prima ottengo il totale



function mostra(hs){
  document.getElementById("nome").textContent=hs.nome;
  document.getElementById("cognome").textContent=hs.cognome;
  document.getElementById("anni").textContent=hs.eta;

}
/* lo utilizzavamo col bottne in prova.html
function tryfetch() {
        fetch("allievi.php?" + new URLSearchParams(
          {id: Math.floor(Math.random() * totale) + 1}))
          .then(r => r.json())
          .then(b => mostra(b))//richiamo il mostra
      }
*/
function tryfetch2(e) {
  //console.log(e.target.value);
          fetch("allievi.php?" + new URLSearchParams(
          {id: e.target.value}))
          .then(r => r.json())
          .then(b => mostra(b))//richiamo il mostra */
      }


      