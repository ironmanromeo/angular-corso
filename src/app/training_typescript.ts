class Datastore {
  private _dati :string = ""

  get dati() {
    console.log("sto leggendo i dati");
    return this._dati
  }

  set dati(dati :string) {
    console.log("sto settando i dati");
    this._dati = dati
  }

  get datiSenzaParentesi() {
    return this._dati
  }
}

const ds = new Datastore()

ds.dati = "ciao"

console.log(ds.dati)

