


  const persona1 = {
    nome: "Mario",
    cognome: "Rossi",
    eta:20,
    altezza:1.70
  }

  const persona2 = {
    nome: "Mario",
    cognome: "Rossi",
    eta:20,
  }

  const persone = [persona1, persona2]
  
  const calcolaNomi = (p1, p2) => {
    return p1 +p2
  }
  const dataStore = {
    numeroPersone: 10,
    persone,
    calcolaNomi
  }
  
  const altezza1 = dataStore?.persone?.[0]?.altezza??0

  console.log(altezza1)