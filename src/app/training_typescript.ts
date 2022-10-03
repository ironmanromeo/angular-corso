type persona = {
  nome:string,
  cognome:string,
  eta:Number,
  altezza?:Number
}

const persona1 = {
  nome:"Mario",
  cognome:"Rossi",
  eta:20,
  altezza:1.85
}

class dataStore{
  private _dati : string = "Inizializzazione"

  get dati(){
    return this._dati
  }

  set dati(dati:string){
    if(dati!="pippo") this._dati = dati
  }

  get datiSenzaParentesi(){
    return this._dati
  }
}


const ds = new dataStore()

ds.dati="pippo"

console.log(ds.dati)
