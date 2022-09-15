const nomi1 = ["Renzo", "Lucia"]
const nomi2 = ["Griso", "Don Abbondio"]

const insiemeNomi1 = [nomi1, nomi2]
console.log("Senza Spread: ", insiemeNomi1);

const insiemeNomi2 = [...nomi1, ...nomi2]
console.log("Con Spread: ", ...nomi1, ...nomi2);

