


// union type
type StringheNumeri = string | number

function unisci(val1:StringheNumeri, val2:StringheNumeri) {
    if (typeof val1 === "number" && typeof val2 === "number") {
      return "Valore ritornato numero: " + (val1 + val2);
    } else {
      return "Valore ritornato stringa: " + val1 + val2;
    }
  }
  
  const risultato = unisci(12, 14);
  
  console.log(risultato);
  