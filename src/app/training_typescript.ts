const persone: any[] = []

function creaPersona (nome: string, cognome:string, eta: number):object {
    return {nome, cognome, eta}

}

persone.push(creaPersona("Mario", "Rossi", 42))
persone.push(creaPersona("Luigi", "Mario", 22))
persone.push(creaPersona("Mario", "Mario", 52))

console.log(persone)


