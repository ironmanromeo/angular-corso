type Tipo1 = {
    nome: string;
    cognome: string;
    eta: number
}

type Tipo2 = {
altezza: number;
occhiali: boolean
}

type PersonaTipo = Tipo1 & Tipo2

const persona: PersonaTipo = {
nome: "Renzo",
cognome: "Tramaglino",
eta: 40,
altezza: 1.70,
occhiali: false
}

console.log(persona)


const nomi: string[] =[]
nomi.push("mario")
const nomi2 = new Array<string>()

const pr = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Finito")
    },1000)
})
console.log("Iniziato")
pr.then(risposta=>{
    const lunghezza = risposta.length
    console.log("Reply : "+lunghezza)
})
