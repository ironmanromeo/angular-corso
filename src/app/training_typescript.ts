const datiAnagrafici = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20
}

const datiBiometrici = {
    pupilla: "chiara",
    altezza: 1.74
}

const persona = {
    ...datiAnagrafici,
    ...datiBiometrici
}

console.log(persona)