type persona={
    nome:string
    cognome:string
    eta:number
    nomecognome:any
}
    
    const persona1:persona= {
        nome: "Renzo",
        cognome: "Tramaglino",
        eta:20,
        nomecognome(){
            this.nome + " " +this.cognome
        } 
    };

    const persona2:persona= {
        nome: "Renza",
        cognome: "Tramaglina",
        eta:23,
        nomecognome(){
            this.nome + " " +this.cognome
        } 
    };
console.log(persona1.nome,persona1.cognome)
console.log(persona2.nome,persona2.cognome)