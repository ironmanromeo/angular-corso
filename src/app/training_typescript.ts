const persone:any=[]

function peopleCreator(nome:string, cognome:string, eta:number){
    const persona={
        nome: nome,
        cognome: cognome,
        eta: eta
    };
    return persona
}

persone.push(peopleCreator("pippo", "inzaghi", 41))
persone.push(peopleCreator("andry", "shevchenko", 41))
persone.push(peopleCreator("paolo", "maldini", 41))

for(let i=0; i<persone.lenght; i++){
    console.log(persone[i])
}