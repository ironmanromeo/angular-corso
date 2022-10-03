const persona1 = {
    nome: "mario",
    cognome:"rossi",
    eta:20,
    altezza:1.85
  }
  const persona2 = {
    nome: "giorgio",
    cognome:"gioro",
    eta:22,
   
  }

  const persone = [persona1, persona2]

  const calcolaNomi = (p1,p2) => {
    return p1+p2

  }

  const dataStore = {
    nPersone: 10,
    persone,
    calcolaNomi
  }

  const altezza1 = dataStore?.persone?.[0]?.altezza ?? 0

  console.log("altezza 1 ",altezza1)
  const altezza2 = dataStore?.persone?.[1]?.altezza ?? 0

  console.log("altezza 2 ",altezza2)

  dataStore?.calcolaNomi?.()