const obj ={
    name: "R",
    cognome: "L"
}

const obj2={
    eta:20
}

function merge<T,U>(v1:T,v2:U){
    const union = Object.assign(v1,v2)
    return union
}

const merged=merge(obj,obj2)
console.log(merged.eta)
