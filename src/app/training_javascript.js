const persona1 = {
    nome: "Mario",
    cognome: "Rossi",
    eta:20,
    altezza:1.85
  }
  
  const persona2 = {
    nome: "Mario",
    cognome: "Rossi",
    eta:20,
  }
  
  const persone = [persona1, persona2]
  
  const calcolanomi = (p1, p2) =>{
    return p1+p2
  }
  
  const dataStore = {
    nPersone:10,
    persone,
    calcolanomi,
  }
  
  const altezza1=dataStore?.persone?.[0]?.altezza ?? ""

  console.log(altezza1)
  
  dataStore?.calcolanomi?.()