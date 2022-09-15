type Type1 = {
    nome: string
    cognome: string
    eta: number
}

type Type2 = {
    altezza: number
    occhiali: boolean
}

type TypePerson = Type1 & Type2

const persona: TypePerson = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20,
    altezza: 1.75,
    occhiali: false
}