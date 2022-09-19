<<<<<<< HEAD
const obj1 = {
    nome : "R",
    cognome : "L"
}

const obj2= {
    eta : 20
}

function merge<T,U> (v1:T,v2:U){
    const union = Object.assign(v1,v2)
    return union
}

const merged = merge(obj1,obj2)
console.log("merged",merged)

console.log(merged.eta)
=======



function merge<T,U>(v1:T, v2:U){
    return Object.assign(v1,v2)
    //return {...v1,...v2}
}

const obj1 = {
    nome:"Renzo",
    cognome:"Tramaglino"
}

const obj2 = {
    eta:20
}

const obj3 = {
    altezza:1.74,
    peso:"troppo"
}

const merged = merge(obj1,obj2)
const merged2 = merge(obj1,obj3)
//const merged3 = merge(merged,23)

//console.log(merged3)
>>>>>>> origin/main
