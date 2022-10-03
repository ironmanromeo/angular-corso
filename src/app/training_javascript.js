const persona = {
    nome:"Mario",
    cognome:"Rossi",
    eta:23,
    altezza:1.85
  }
  
  const persona2 = {
    nome:"Giulia",
    cognome:"Ottarini",
    eta:23,
    altezza:1.85
  }
  
  const persone = {persona,persona2}
  
  const calcolaNomi = (p1,p2) =>{
    return p1 + p2
  }
  
  
  const datastore = {
    nPersone: 10,
    persone,
  }
  
  const altaezza1 = datastore?.persone?.[0]?.altezza??0
  console.log(altezza1);
  