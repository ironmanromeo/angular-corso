let list: any[] = []

function creapersona (nome: string, cognome: string, eta: number){
    const persona = {
        nome,
        cognome,
        eta
    }

    return persona
}




const persona1 = creapersona("Renzo", "Tramaglino", 20)
const persona2 = creapersona("Lucia", "Mondella", 19)
const persona3 = creapersona("Don", "Abbondio", 50)

list.push(persona1)
list.push(persona2)
list.push(persona3)


list.forEach(persona => {
    console.log(list)
});