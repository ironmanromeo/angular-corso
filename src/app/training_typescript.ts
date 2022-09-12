let nomi: string[] = []

const nome1 = nomi.push("Marco")
const nome2 = nomi.push("Francesco")
const nome3 = nomi.push("Giovanni")
const nome4 = nomi.push("Paolo")
const nome5 = nomi.push("Omar")

const aggiungiNome = prompt("Aggiungi un nome")

function addnome(n: string){
        
        if(nomi.length<5){
            nomi.push(n)
            
        }
        else{
            console.log("Hai raggiunto il numero massimo di elementi inseribili")
        }
    
}



console.log(nomi)