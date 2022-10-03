
  type persona =  {
    nome: string;
    cognome: string;
    eta: number;
    altezza?: number;

  }

  const persona1 = {
    nome: "mario",
    cognome:"rossi",
    eta:20,
    altezza:1.85
  }
  
  const calcolaNomi = (p1:string,p2:string) => {
    return p1+p2

  }