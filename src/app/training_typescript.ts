const obj1 = {
    nome: "R",
    cognome: "L"

}

const obj2 = {
    eta: 20
}

function merge<T, U>(v1:T, v2:U) {
    return (...v1, ...v2)
}

const merged = merge (obj1, obj2)
console.log("merged:", merged)