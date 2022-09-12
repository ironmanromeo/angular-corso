const nomi:string[] = []

function aggiungiNome(arr:string[], nome:string) {

    if (arr.length < 5) {
        arr.push(nome)
    } else {
        console.log("Errore: array pieno")
    }

    return nomi

}

aggiungiNome(nomi, "nome1")
aggiungiNome(nomi, "nome2")
aggiungiNome(nomi, "nome3")
aggiungiNome(nomi, "nome4")
aggiungiNome(nomi, "nome5")
aggiungiNome(nomi, "nome6")

console.log(nomi)
