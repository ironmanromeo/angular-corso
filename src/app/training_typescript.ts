const persone:any[] = []

function creaPersona(nome:string, cognome:string, eta:number){
    const persona = {
        nome: nome,
        cognome: cognome,
        eta: eta
    }
    return persona;
}

const persona1 = creaPersona("Renzo", "Tramaglino", 20)
const persona2 = creaPersona("Lucia", "Mondella", 19)
const persona3 = creaPersona("Don", "Abbondio", 50)

persone.push(persona1)
persone.push(persona2)
persone.push(persona3)

persone.forEach(persona => console.log(persona))