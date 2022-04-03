//sta creando un oggetto ->{} non e una funzione
//     function vuota
 
function utente(nome, cognome) {
  let u = Object.create(utente.methods)
    u.nome = nome
    u.cognome= cognome
    console.log(u.toString())
    return u 
  }
  utente.methods = { 
          toString: function() 
          { return "Utente: " + this.nome +" "+this.cognome }
           ,country:"Italy"       
  };
  
  let a = utente("Andrea","Cesanelli")
 // console.log(a.toString())
  console.log(a)
  console.log(a.country)
  
//utente.methods = { 
//  toString() { return "Utente: " + this.nome }         
//};


  