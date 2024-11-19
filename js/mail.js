/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email
*/

let email = prompt('Inserisci la tua Mail');
const lista = ['google@gmail.com' , 'yahoo@gmail.com' , 'stefano@gmail.com' , 'carlo@gmail.com' , 'alessio@gmail.com'];
let isEmailPresent = false
let message = 'Questa email non è presente nella lista'

for(let i=0 ; i < lista.length ; i++){
  if(lista[i]===email){
    isEmailPresent = true
    message = 'Questa email è nella lista!'
  }
}
console.log(message)


/*
oppure

if(lista.includes(email)){
message='Puoi entrare'
} else {
message='Non puoi entrare'
}

console.log(message)

*/