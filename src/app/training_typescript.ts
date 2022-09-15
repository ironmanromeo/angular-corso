//import { type } from "os"


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
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 40,
    altezza: 1.70,
    occhiali: false
  }
  
  console.log(persona)