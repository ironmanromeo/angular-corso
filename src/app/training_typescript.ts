const person:any=[];


function creaPersona(nome:string,cognome:string,eta:number)
{
    const persona={
        nome:nome,
        cognome:cognome,
        eta:eta
    };
    return persona;
}

person.push(creaPersona("Renzo","Tramaglino",20));
person.push(creaPersona("Lucia","Mondella",19));
person.push(creaPersona("Don","Abbondio",50));

for (let i = 0; i < person.length; i++) {
    console.log(person[i]);

    
  }
