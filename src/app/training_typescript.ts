class MyStorage<T> {
  items: T[] = [];

  constructor(item:T) {
    this.addItem(item)
  }


  addItem(item: T) {
    this.items.push(item);
  }

  removeItem() {
    this.items.pop();
  }

  getItems() {
    return [...this.items];
  }
}

const myStorage = new MyStorage("ciao");

myStorage.addItem("Pollo");

const lista1 = myStorage.getItems();
const nome1 = lista1[0];
const lunghezzaNome1 = nome1.length;

console.log(lunghezzaNome1);
