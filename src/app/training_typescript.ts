let nomi: string[] = []
let nome: string[] = ["Mario", "Luca", "Marco", "Luigi", "Giuseppe", "Cristian", "Omar"]

function aggiungiNome() {
    for(let i=0; i<nome.length; i++) {
        nomi.push(nome[i]);
        console.log(nomi[i]);

        if(i===4) {
            console.log("errore...");
            break;
        }
    }
}

console.log("---------------------------------------------------------------------");
aggiungiNome();