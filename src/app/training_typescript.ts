class MyStorage<T extends string | number> {
    items: T[] = []

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

const stringStorage = new MyStorage<string>()
const numberStorage = new MyStorage<number>()

stringStorage.addItem("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
numberStorage.addItem(32)
numberStorage.addItem(12)

const lista1 = stringStorage.getItems()
const nome1 = lista1[0]
const lunghezzaNome1 = nome1.length

console.log(nome1)
console.log(lunghezzaNome1)
