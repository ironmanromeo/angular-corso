const persone :any = []

function creaPersona(nome:string,cognome:string,eta:number):Object{
    const persona = {
        nome,
        cognome,
        eta
    }
    return persona;
}

function aggiungiNomi(persona:object){
    persone.push(persona)
}

const persona1 = creaPersona("Renzo","Tramaglino"20)
const persona2 = creaPersona("Lucia","Mondella",19)
const persona3 = creaPersona("Don","Abbondio",50)

persone.push(persona1)
persone.push(persona2)
persone.push(persona3)

persone.forEach(persona => console.log(persona)){

}
    
});