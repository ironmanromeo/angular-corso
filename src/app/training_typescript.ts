let nomi: string[] = []

function addnome(n: string){   
    if(nomi.length<5){
        nomi.push(n)        
    }    
    else{
        console.log("Hai raggiunto il numero massimo di elementi inseribili")
   }    
}

addnome("Marco")
addnome("Francesco")
addnome("Giovanni")
addnome("Paolo")
addnome("Omar")
addnome("Ciao")

console.log(nomi)