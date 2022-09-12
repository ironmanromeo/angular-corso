const numero1 = 28.5
const numero2 = "5"

function somma(v1:number|string, v2:number|string){
    if (typeof v1 === "number" && typeof v2 === "number") {
        return v1 + v2
    } else {
        return `Non sono numeri: v1 è ${v1} e v2 è ${v2}`
    }
}

const risultato = somma(numero1, numero2)

console.log(risultato)