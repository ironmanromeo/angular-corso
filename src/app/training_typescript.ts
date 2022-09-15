const persone = ["Renzo","Lucia","Don Abbondio"]
const [persona1, persona2, ...rest] = persone

const nuovePersone = [persona1, persona2, "Griso"]
console.log(nuovePersone)