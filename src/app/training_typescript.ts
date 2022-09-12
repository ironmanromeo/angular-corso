const persone:any[] = [];

function creaPersona(nome:string, cognome:string, eta:number):object {
    const persona = {
        nome: nome,
        cognome: cognome,
        eta: eta
    };

    return persona;
}

const persona1 = creaPersona("Renzo", "Tramaglino", 20);
const persona2 = creaPersona("Lucia", "Mondella", 19);
const persona3 = creaPersona("Don", "Abbondio", 50);

persone.push(persona1)
persone.push(persona2)
persone.push(persona3)

for(let i=0; i<persone.length; i++) {
    console.log(persone[i]);
}