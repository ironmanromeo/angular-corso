class DataStore {
  private _dati: string = ""

  get dati() {
    console.log("Sto leggendo i dati");
    return this._dati
  }

  set dati(dati: string) {
    if(dati !== "pippo") {
      this._dati = dati
    } else {
      console.log("Errore");
    }
    console.log("Sto impostando i dati");

  }

  get datiSenzaParentesi() {
    return this._dati
  }
}

const datastore = new DataStore()
datastore.dati = "pippo"

// console.log(datastore.dati);
