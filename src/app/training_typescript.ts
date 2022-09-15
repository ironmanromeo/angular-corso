const obj1 = {
  nome: "R",
  congnome: "L"
}

const obj2 = {
  eta: 20
}

const obj3 = {
  altezza: 1.74,
  peso: "troppo"
}

function merge<T extends object, U extends object>(val1: T, val2: U) {
    return {...val1, ...val2}
}

const merged = merge(obj1, obj2)
const merged2 = merge(obj1, obj3)
// const merged3 = merge(merged, 23)

console.log(merged)
