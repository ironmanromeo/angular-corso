type Tipo1 = {
    nome : string,
    cognome : string,
    eta : number
}

type Tipo2 = {
    altezza : number,
    occhiali : boolean
}

type PersonaTipo = Tipo1 & Tipo2

const persona : PersonaTipo = {
    nome:"Renzo",
    cognome:"Tramaglino",
    eta:20,
    altezza:180,
    occhiali:true
}

console.log(persona)
