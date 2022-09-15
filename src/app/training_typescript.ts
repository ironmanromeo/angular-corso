const datiAnagrafici = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
}

const datiBiometrici = {
    pupilla: "Chiara",
    altezza: 1.74
}

const persona1 = {
    ...datiAnagrafici,
    ...datiBiometrici
}

console.log("Persona 1: ", persona1);
