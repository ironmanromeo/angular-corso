class Datastore {
  private _dati:string[]=[]

  getDati(){
    return this._dati
  }

  setDati(dati : string[]){
    this._dati = dati
  }

  get datiSenzaParentesi(){
    return this._dati
  }
}

const ds = new Datastore()

//ds.dati=["Ciao"]

console.log(ds.getDati());
console.log(ds.datiSenzaParentesi);