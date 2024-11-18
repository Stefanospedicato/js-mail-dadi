/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let randomNumberGiocatore = Math.ceil(Math.random()*6)
let randomNumberComputer = Math.ceil(Math.random()*6)
let numGiocatore = alert(`'Il tuo numero è: '${randomNumberGiocatore}''`);
let numComputer = alert(`'Il numero del computer è: '${randomNumberComputer}''`);

  if(randomNumberComputer > randomNumberGiocatore){
    alert('Che Sfiga! Hai perso.')
  } else if (randomNumberGiocatore > randomNumberComputer){
    alert('Complimenti! Ha vinto il tuo numero perchè è più alto!')
  } else{
    alert('Pareggio!')}
console.log(randomNumberComputer)
console.log(randomNumberGiocatore)