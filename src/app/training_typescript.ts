const nomi: string[]=[]
const nome1= "mario"
const nome2= "marco"
const nome3= "marzo"
const nome4= "marcio"
const nome5= "arco"

function aggiungiNome (nome :string){
if (nomi.length<5)
nomi.push(nome)
else
console.log("errore...")
}