const nomi: string[] = []
const nomi2 = new Array<string>()

nomi2.push("12")

function pippo(param:string, param2:number) {

}

const pr = new Promise<string>((resolve, reject) => {
  setTimeout(() =>{
    resolve ("finito")

  }, 3000)
})

console.log("Iniziato")
pr.then (risposta => {
    const lunghezzaStringa = risposta.length
    console.log("Risposta:", risposta);
})