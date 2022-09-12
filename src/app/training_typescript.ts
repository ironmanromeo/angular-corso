const persone: any[] = []

function createObject(name:string, surname:string, age:number):object {
    const object = {
        name: name,
        surname: surname,
        age: age
    }

    return object
}

const persona1 = createObject("Renzo", "Tramigliano", 20)
const persona2 = createObject("Lucia", "Mondella", 19)
const persona3 = (createObject("Don", "Abbondio", 50))

persone.push(persona1)
persone.push(persona2)
persone.push(persona3)

persone.forEach(persona => console.log(persona))