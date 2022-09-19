
const persona1_parte1 = {
    nome : "L",
    cognome : "M",
  }
  
  const persona1_parte2 = {
    eta:30,
    altezza:140
  }
  
  function combina<T,U>(obj1:T,obj2:U){
    return {...obj1,...obj2}
  }
  
  const persona1 = combina(persona1_parte1,persona1_parte2)
  
  console.log(persona1.eta)
  