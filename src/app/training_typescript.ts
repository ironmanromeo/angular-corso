<<<<<<< HEAD
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
=======



function merge<T,U>(v1:T, v2:U){
    return Object.assign(v1,v2)
    //return {...v1,...v2}
}

const obj1 = {
    nome:"Renzo",
    cognome:"Tramaglino"
}

const obj2 = {
    eta:20
}

const obj3 = {
    altezza:1.74,
    peso:"troppo"
}

const merged = merge(obj1,obj2)
const merged2 = merge(obj1,obj3)
//const merged3 = merge(merged,23)

//console.log(merged3)
>>>>>>> origin/main



function merge<T,U>(v1:T, v2:U){
    return Object.assign(v1,v2)
    //return {...v1,...v2}
}

const obj1 = {
    nome:"Renzo",
    cognome:"Tramaglino"
}

const obj2 = {
    eta:20
}

const obj3 = {
    altezza:1.74,
    peso:"troppo"
}

const merged = merge(obj1,obj2)
const merged2 = merge(obj1,obj3)
//const merged3 = merge(merged,23)

//console.log(merged3)
