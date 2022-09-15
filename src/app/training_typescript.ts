const obj1 = {
  nome: "R",
  congnome: "L"
}

const obj2 = {
  eta: 20
}

function merge<T, U>(val1: T, val2: U) {
    return {...val1, ...val2}
}

const merged = merge(obj1, obj2)

console.log(merged.nome)
