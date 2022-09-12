const nomi = []

function getParametri(nome:string,cognome: string, eta:number):object {
    const persona = {
        nome : nome,
        cognome : cognome,
        eta : eta,
    }
    return persona
}
nomi.push(getParametri("Renzo","tramaglio",42))
console.log(nomi)
