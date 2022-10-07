<<<<<<< HEAD
const persona1_parte1 = {
    nome: "L",
    cognome: "M",

}

const persona1_parte2 = {
    eta:30,
    altezza:140
}



function combina<T,U>(obj1:T,obj2:U){
    return {...obj1,...obj2}
} 

const persona1 = combina(persona1_parte1,persona1_parte2)

console.log(persona1)
=======
class Datastore {
  private _dati :string = ""

  get dati() {
    console.log("sto leggendo i dati");

    return this._dati
  }

  set dati(dati :string) {
    if (dati !== "pippo") {
      console.log("sto settando i dati");
      this._dati = dati
    } else {
      console.log("Errore!");

    }

  }

}

const ds = new Datastore()

ds.dati = "pippo"

console.log(ds.dati);

>>>>>>> origin/main
