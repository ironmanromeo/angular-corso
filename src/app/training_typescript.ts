const persone:any[] = []

function creaPersona(nome:any, cognome:any, eta:any) {

    const persona = {
        nome: nome,
        cognome: cognome,
        eta: eta
    }

    return persona

}

persone.push(creaPersona("Renzo","Tramaglino",20))
persone.push(creaPersona("Lucia","Mondella",19))
persone.push(creaPersona("Don","Abbondio",50))

console.log(persone)