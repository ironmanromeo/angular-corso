const persona:any[] = []

function crea(nome:string, cognome:string, eta:Number){
    const persona={
        nome: nome,
        cognome: cognome,
        eta: eta
    }
    return persona
}

const persona1=crea("Renzo","Tramaglino",20)
const persona2=crea("Lucia","Mondella",19)
const persona3=crea("Don","Abbondio",50)

persona.push(persona1)
persona.push(persona2)
persona.push(persona3)

persona.forEach(persona =>console.log(persona))
