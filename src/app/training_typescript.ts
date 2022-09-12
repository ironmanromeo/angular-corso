const nomi:string[] = []
function aggiunginome(nome:string){
    if (nomi.length<5){
    nomi.push(nome)
    }
    else{
        console.log("non possono essere aggiunti più di 5 nomi")
    }
}
aggiunginome("fabia")
aggiunginome("fabie")
aggiunginome("fabii")
aggiunginome("fabio")
aggiunginome("fabiu")
console.log(nomi)
