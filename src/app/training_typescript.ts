class MyStorage<T extends string | number> {
  items: T[] = [];

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

const myStorage = new MyStorage<string>();

myStorage.addItem("Pollo");

const lista1 = myStorage.getItems();
const nome1 = lista1[0];
const lunghezzaNome1 = nome1.length;

console.log(lunghezzaNome1);
