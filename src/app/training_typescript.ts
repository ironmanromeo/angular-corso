const persone:any[] = []

function creaPersona(nome:string,cognome:string,eta:number){
    const persona = {
                    nome,
                    cognome,
                    eta:eta
    }
    return persona     
}

const persona1 = creaPersona("Renzo","Tramaglino",22)
persone.push(persona1)