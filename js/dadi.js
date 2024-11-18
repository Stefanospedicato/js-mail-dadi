/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let randomNumberGiocatore = Math.ceil(Math.random()*6)
let randomNumberComputer = Math.ceil(Math.random()*6)
let numGiocatore = confirm(`'Il tuo numero è: '${randomNumberGiocatore}''`);
let numComputer = confirm(`'Il numero del computer è: '${randomNumberComputer}''`);

  if(randomNumberComputer > randomNumberGiocatore){
    confirm('Che Sfiga! Hai perso.')
  } else if (randomNumberGiocatore > randomNumberComputer){
    confirm('Complimenti! Ha vinto il tuo numero perchè è più alto!')
  } else{
    confirm('Pareggio!')}
console.log(randomNumberComputer)
console.log(randomNumberGiocatore)