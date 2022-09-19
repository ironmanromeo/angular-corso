class Magazzino<T extends string | number>{
  items:T[]=[]

  pushItem(oggetto:T){
    this.items.push(oggetto)
  }

  removeItem(){
    this.items.pop()
  }

  getNewArray(){
    return [...this.items]
  }
}

const mg=new Magazzino<string>()
mg.pushItem("Ciao")
const temp=mg.getNewArray()[0].length
console.log(temp)

