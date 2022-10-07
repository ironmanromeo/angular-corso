var Datastore = /** @class */ (function () {
    function Datastore() {
        this._dati = "";
    }
    Object.defineProperty(Datastore.prototype, "dati", {
        get: function () {
            console.log("sto leggendo i dati");
            return this._dati;
        },
        set: function (dati) {
            if (dati !== "pippo") {
                console.log("sto settando i dati");
                this._dati = dati;
            }
            else {
                console.log("Errore!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Datastore;
}());
var ds = new Datastore();
ds.dati = "pippo";
console.log(ds.dati);
