const persona1 = {
    nome:"Renzo",
    cognome:"Tramaglino",
    eta:20,
    indirizzo:"Via B.Crespi",
    citta:"Milano",
    Nazione:"IT"

}

//...
//ultimo parametro
//il nome per convenzione è rest
const { nome,cognome,eta, ...rest } = persona1

console.log("qui oggetto persona1: ", persona1);
console.log("qui oggetto rest: ", rest);

