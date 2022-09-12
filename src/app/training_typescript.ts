const nomi:string[]=[]
function aggiungiNome(nome:string){
    if(nomi.length<5)nomi.push(nome)
    else console.log("errore! aggiunti già 5 elementi")
}

for(let i=0; i<8; i++){
    aggiungiNome(i.toString())
    console.log(nomi)
}