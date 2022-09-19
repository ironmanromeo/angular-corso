class MyStorage<T> {
  items:T[] = []

  constructor(item:T[]) {
    item.forEach(element => {
        this.addItem(element) 
    });
  }

  addItem(item:T) {
    this.items.push(item)
  }

  removeItem() {
    this.items.pop()
  }

  getItems() {
    return [ ...this.items ]
  }
}

const myStorage = new MyStorage(["Pippo"])

myStorage.addItem("Pollo")

const lista1 = myStorage.getItems()
const nome1 = lista1[0]
const lunghezzaNome1 = nome1.length

console.log(...lista1)
console.log(lunghezzaNome1)
