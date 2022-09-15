const obj1 = {
    nome : "R",
    cognome : "L"
}

const obj2={
    eta : 20
}

const obj3 = {
    altezza : 174,
    peso : "ciao"
}

function merge<T,U>(v1:T,v2:U){
    return Object.assign(v1,v2)
}

const merged = merge(obj1,obj2)
const merged2= merge(obj1,obj3)

console.log(merged2)
