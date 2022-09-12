const nomi :string[]=[]
function aggiungiNome(nome:string){
    if(nomi.length<6){
        nomi.push(nome)
    } else {
        console.log("Massimo 5 nomi")
    }
    aggiungiNome("Marco")
    aggiungiNome("Paolo")
    aggiungiNome("Luca")
    aggiungiNome("Matteo")
    aggiungiNome("Ivan")
    console.log(nomi)
}
