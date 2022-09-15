const nomi: string[] = [];
const nomi2 = new Array<string>();

nomi2.push("12");

const pr = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Finito");
  }, 10000);
});

console.log("Iniziato");
pr.then((risposta) => {
  const lunghezzaStringa = risposta.length;
  console.log("Risposta: ", risposta);
});
