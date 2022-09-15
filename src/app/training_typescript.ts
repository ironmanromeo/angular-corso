type StringNumero = string | number
function unisci(val1: string|number, val2: StringNumero) {
    if(typeof val1 === "number" && typeof val2 === "number" ) {
        const somma = val1 + val2
        return "Somma: " + somma
    } else {
        return "Unione di caratteri: " + val1 + val2
    }
}

const risultato = unisci(2,"3")
console.log(risultato);

