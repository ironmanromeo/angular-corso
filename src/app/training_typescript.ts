
const eta = 32

type persona = {
    nome: string,
    cognome: string,
    eta: number,
    nomeCognome: any
}

const persona1:persona= {
    nome:"marca",
    cognome:"marca",
    eta:41,
    nomeCognome()
    {
        return this.nome + " " + this.cognome
    }
}


const persona2:persona = {
    nome:"marca",
    cognome:"marca",
    eta:41,
    nomeCognome()
    {
        return this.nome + " " + this.cognome
    }
}

console.log(persona2.nomeCognome())