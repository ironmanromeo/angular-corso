const obj1 = {
    nome: "Renzo",
    cognome: "Tramaglino"
}

const obj2 = {
    eta: 20
}
const obj3 = {
    altezza: 1.74,
    peso: "Troppo"
}

function merge<T extends object, U extends object>(v1:T, v2: U) {
    return {...v1, ...v2}
}

const merged = merge(obj1, obj2)
const merged2 = merge(obj1, obj3)
const merged3 = merge(merged, merged2)

console.log("Answer: ", merged);

console.log(merged3)
