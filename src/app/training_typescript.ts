const nomi:string[]=[]
const nomi2=new Array<string>()

nomi.push("12")
const pr=new Promise<string>((resolve,reject) => {
  setTimeout(()=>{
    resolve("Finito")
  },1000);
});

console.log("Iniziato")
pr.then(risposta=>{
    const lunghezzaStringa=risposta.length
    console.log("Risposta",risposta)
  })