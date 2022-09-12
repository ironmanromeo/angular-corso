const nomi:any[] = []

function creaOggetto(v1:any, v2:any, v3:any) {

    const persona = {
        nome: v1,
        cognome: v2,
        eta: v3
    }

    return persona

}

nomi.push(creaOggetto("Renzo","Tramaglino",20))
nomi.push(creaOggetto("Lucia","Mondella",19))
nomi.push(creaOggetto("Don","Abbondio",50))

console.log(nomi)