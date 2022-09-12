const nomi: string[] = []

function aggiunginome(nome:string){
    if(nomi.length<5)
    nomi.push(nome);
    else
    console.log("errore")
};


aggiunginome("carlo")
aggiunginome("spizzi")
aggiunginome("tonali")
aggiunginome("ibra")
aggiunginome("theo")

console.log(nomi)

aggiunginome("ellooow")