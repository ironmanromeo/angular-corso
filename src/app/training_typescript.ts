const nomi: string[] = []
const nomi2 = new Array<string>()

nomi2.push("12")



const pr = new Promise<string>((resolve, reject)=>{
    setTimeout(() =>{
        resolve("finito")
    }, 5000)
})

pr.then(risposta =>{
    const lughezzaString=risposta.length
    console.log("Risposta:", risposta);
})