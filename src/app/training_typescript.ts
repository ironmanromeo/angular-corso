class Datastore {
  private _dati:string[] = []

  get Gati() {
    return this._dati
  }

  set Dati(dati:string[]) {
    this._dati = dati
  } 

  get DatiSenzaParentesi( ) {
    return this._dati
  }
}

const ds = new Datastore

ds.Dati=["Ciao"]