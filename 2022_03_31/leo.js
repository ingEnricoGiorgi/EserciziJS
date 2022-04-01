//Modalità Object.create()
function utente(nome, cognome) {
    let u = Object.create(utente.methods)
    u.nome = nome
    u.cognome = cognome
    return u
}
utente.methods = {
    toString: function() { return "Utente: " + this.nome + " " + this.cognome }
}
let a = utente("Leonardo", "Ciaroni")

//Modalità new
function Utente2(nome, cognome) {
    this.nome = nome
    this.cognome = cognome
}
Utente2.prototype = {
    toString: function() { return "Utente: " + this.nome + " " + this.cognome }
}
let b = new Utente2("Leonardo", "Ciaroni")

//Modalità class
class Utente3 {
    constructor(nome, cognome) {
        this.nome = nome
        this.cognome = cognome
    }
    toString() { return "Utente: " + this.nome + " " + this.cognome }
}
let c = new Utente3("Leonardo", "Ciaroni")
console.log(c)
