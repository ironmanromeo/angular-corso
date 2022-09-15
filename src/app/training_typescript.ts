import { type } from "os"

type Tipo1 = {
    nome: string;
    cognome: string;
    eta: number
}

type Tipo2 = {
    altezza: number;
    occhiali: boolean
}

type PersonaTipo = Tipo1 & Tipo2

const persona: PersonaTipo = {
    nome: "Francesco",
    cognome: "Gianni",
    eta: 30,
    altezza: 1.74,
    occhiali: true
}

console.log(persona)