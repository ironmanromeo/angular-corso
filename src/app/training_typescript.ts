const arr:any[]=[]

function aggiungiPersona (nome:string, cognome:string, eta:number):object{
    return {nome,cognome,eta}
}

arr.push(aggiungiPersona("Renzo","Tramaglino",20))
arr.push(aggiungiPersona("Lucia","Mondella",19))
arr.push(aggiungiPersona("Don","Abbondio",50))


for(let i=0; i<3; i++){
    console.log(arr[i])
}
