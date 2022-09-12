const nomi: string[]=[]
function aggiungiNome (nome :string){
if (nomi.length<5)
nomi.push(nome)
else
console.log("errore...")
}

aggiungiNome("Ivan")
aggiungiNome("Paolo")
aggiungiNome("Marco")
aggiungiNome("Giorgio")
aggiungiNome("Gabriele")
console.log(nomi)
aggiungiNome("Gianni")
console.log(nomi)
