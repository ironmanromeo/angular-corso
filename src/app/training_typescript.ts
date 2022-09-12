class Persona{

nome:string
cognome:string
eta:number

constructor(nome:string,cognome:string,eta:number){
    this.nome=nome
    this.cognome=cognome
    this.eta=eta
}

nomeCognome(){
    return `nome:${this.nome},cognome:${this.cognome},eta:${this.eta}`
}

}