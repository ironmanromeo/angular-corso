const nomi: string[] = []

function aggiungiNome(nome: string){
    if(nomi.length === 5){
        console.log("errore...")
    } else {
        nomi.push(nome)
    }
}

console.log(nomi)