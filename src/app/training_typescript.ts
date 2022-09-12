type persona={
    nome:string
    cognome:string
    eta:number
}
    
    
    
    const persona1:persona= {
        nome: "Renzo",
        cognome: "Tramaglino",
        eta:20
    };

    const persona2:persona= {
        nome: "Renza",
        cognome: "Tramaglina",
        eta:20
    };

console.log(persona1)
console.log(Object.keys(persona1))
console.log(persona2)
console.log(Object.keys(persona2))