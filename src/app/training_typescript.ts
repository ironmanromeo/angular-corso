const nomi:string[] = []

function aggiungiNome(nome:string){
    if(nomi.length < 5){
        nomi.push(nome)
    } else {
        console.log("Errore...")
    }
}

aggiungiNome("Nome1")
aggiungiNome("Nome2")
aggiungiNome("Nome3")
aggiungiNome("Nome4")
aggiungiNome("Nome5")
aggiungiNome("Nome6")

console.log(nomi)
