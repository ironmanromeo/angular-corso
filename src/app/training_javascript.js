function unisci(val1, val2) {
    if(typeof val1 === "number" && typeof val2 === "number" ) {
        return "Somma: " + (val1 + val2)
    } else {
        return "Unione di caratteri: " + val1 + val2
    }
}

const risultato = unisci(22,3)
console.log(risultato);
