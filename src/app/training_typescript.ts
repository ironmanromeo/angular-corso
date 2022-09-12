const nomi:any[] = []

function creaPersona(nome:any, cognome:any, eta:any) {

    const persona = {
        nome: nome,
        cognome: cognome,
        eta: eta
    }

    return persona

}

nomi.push(creaPersona("Renzo","Tramaglino",20))
nomi.push(creaPersona("Lucia","Mondella",19))
nomi.push(creaPersona("Don","Abbondio",50))

console.log(nomi)