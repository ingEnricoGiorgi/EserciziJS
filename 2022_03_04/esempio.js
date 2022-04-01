//let btn = document.getElementById("il_mio_bottone");


function entra(){
  this.className="visitato";
}
function esce(){
  this.className="non_visitato";
}


let a= document.getElementsByTagName("button");
for(let btn of a) {
   btn.addEventListener('mouseenter',entra);
   btn.addEventListener('mouseout',esce);
}