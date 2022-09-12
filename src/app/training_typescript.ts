const persone:any[] = []
function CreaPersona(nome:string,cognome:string,eta:any){
    const persona ={
        nome: nome,
        cognome: cognome,
        eta: eta
    };
    return persona
}
persone.push(CreaPersona("Renzo","Tramaglino",20))
persone.push(CreaPersona("Lucia","Mondella",19))
persone.push(CreaPersona("Don","Abbondio",50))
persone.forEach(persona => console.log(persona))

