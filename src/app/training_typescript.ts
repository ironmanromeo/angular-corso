function combina<T,U>(obj1:T, obj2:U) {
    return {...obj1,...obj2}
}

const persona1_parte1= {
    nome: "Nome",
    cognome: "Cognome",
}

const persona1_parte2 = {
    eta: 33,
    altezza: 1.70
}

const persona1 = combina(persona1_parte1, persona1_parte2)
console.log(persona1.altezza);