const nomi:string[] = []

function aggiungiNome(nome:string){
    if(nomi.length<5){
        nomi.push(nome)
    } else {
        console.log("Errore...")
    }

    aggiungiNome("Marco")
    aggiungiNome("Paolo")
    aggiungiNome("Luca")
    aggiungiNome("Matteo")
    aggiungiNome("Ivan")
    aggiungiNome("Ross")

    console.log(nomi)
}
