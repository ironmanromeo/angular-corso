
type Persona = {
    nome:string, 
    cognome:string, 
    eta:number,
    nomeCognome:Function

}


const persona1 = {
    nome: "Renzo",
    cognome:"Tramaglino",
    eta: 20,
    nomeCognome(){
        return this.nome + " " + this.cognome
    }
}

console.log(persona1)
console.log(Object.keys(persona1))

const persona2: Persona = {
    nome: "Lucia",
    cognome:"Mondella",
    eta: 19,
    nomeCognome(){
        return this.nome + " " + this.cognome
    }
}
console.log(persona1.nomeCognome())

