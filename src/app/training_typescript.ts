const persona = {
    nome: "Renzo",
    cognome: "Tramaglino",
    eta: 20
  }

  const nomi:string[] = []
  const nomi2 = new Array<string>()


  //classe
  class Persona {
    nome: string
    cognome: string
    eta: number

    //costruttore
    constructor(n:string,c:string,e:number){
        this.nome=n
        this.cognome=c
        this.eta=e
      }

      //funzione
      nomeCognome(){
        return this.nome + this.cognome
      }

  }

const persona1 = new Persona("Renzo","Tramaglino",20)
console.log(persona1.nomeCognome);
      
class MyStorage<T>{
      item:T[] = []
      
      addItem(item:T){
        this.items.push(item)
      }
      removeItem(){
        this.items.pop()
      }

      getItems(){
        return [...this.item]
      }
}

const myStorage = new MyStorage<string|number>();
myStorage.addItem("Pollo")

const lista1 = myStorage.getItems()
const nome1 = lista1[0]
const lengthnome1 = nome1.length

console.log(myStorage.getItems())


