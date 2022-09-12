type Persona = {
    nome:string,
    cognome:string,
    eta:number,
    nomeCognome:Function
}



const persona1:Persona = {
    nome:"Renzo",
    cognome:"Ramaglino",
    eta:20,
    nomeCognome(){
        return this.nome+" "+this.cognome
    }
}

const persona2:Persona = {
    nome:"Lucia",
    cognome:"Mondella",
    eta:19,
    nomeCognome(){
        return this.nome+" "+this.cognome
    }
}

console.log("Nome : "+persona1.nome+" Cognome : "+persona1.cognome)
console.log("Nome : "+persona2.nome+" Cognome : "+persona2.cognome)

