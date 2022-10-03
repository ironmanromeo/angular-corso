class DataStore {
  private _dati :string[] = []

  getdati() {
    return this._dati
  }

  setdati(dati :string[]) {
    this._dati = dati

  }
}

const ds = new DataStore()
ds.setdati(["ciao"])
console.log(ds.getdati())


