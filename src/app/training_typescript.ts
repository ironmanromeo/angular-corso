let nomi: string[] = []

function aggiungiNome(nomi:Array<string>, nome:string) {
    if(nomi.length < 5) {
        nomi.push(nome)
    } else {
        console.log("Limite 5 superato!");
    }
}

aggiungiNome(nomi,"Jimwell")
console.log(nomi);

aggiungiNome(nomi,"Luffy")
console.log(nomi);

aggiungiNome(nomi,"Zoro")
console.log(nomi);

aggiungiNome(nomi,"Sanji")
console.log(nomi);

aggiungiNome(nomi,"Robin")
console.log(nomi);

aggiungiNome(nomi,"Nami")
console.log(nomi);

aggiungiNome(nomi,"Jimbei")
console.log(nomi);
