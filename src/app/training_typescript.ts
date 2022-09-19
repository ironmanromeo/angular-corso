class MyStorage<T> {
    items: T[] = []

    constructor(item: T) {
        this.addItem(item)
    }

    addItem(item: T) {
        this.items.push(item)
    }

    removeItem() {
        this.items.pop()
    }

    getItems(){
        return [...this.items]
    }
}

const stringStorage = new MyStorage("Luffy",)
const numberStorage = new MyStorage(3)

stringStorage.addItem("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
numberStorage.addItem(32)
numberStorage.addItem(12)

const lista1 = stringStorage.getItems()
const nome1 = lista1[0]
const lunghezzaNome1 = nome1.length

console.log(nome1)
console.log(lunghezzaNome1)
