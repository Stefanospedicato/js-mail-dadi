Mail and Dadi
===
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Logica Mail
- Per l'esercizio della mail, ho creato innanzitutto una finestra dove far interagire l'utente con un classico Prompt
- Ho pensato ad un database già presente con varie email all'interno. Ho creato quindi una lista con un array contenente le email.
- Nel momento in cui bisogna fare una verifica, mi sembra di aver capito che bisogna utilizzare i valori Booleani, quindi sono partito dal presupposto che la mail dell'utente non sia presente nel database. Ho creato quindi una variabile 'let' (perchè si modifica) con valore di partenza 'False'.
- Ho creato poi un messaggio per indicare di default che la mail non è presente nel database.
- Ho creato un ciclo con il FOR (dove spiego sostanzialmente che partendo da indice 0, finchè l'indice è minore del numero di mail nel nostro database , ripeto il ciclo e quindi la ricerca di una mail identica).
- Qui ho creato un IF dove la condizione dice che se la mail inserita dall'utente è identica ad una mail del database, il messaggio di default cambia indicandomi che la mail è presente nella lista.

## Logica Dadi
- qui ho cambiato più volte la via perchè ho avuto difficoltà con i numeri random.
- Avevo iniziato creando un ciclo unico per i numeri random, ma ho notato che mi dava poi sempre lo stesso numero ad entrambi i giocatori. Ho cambiato pensiero (sicuramente una strada c'era, ma mi è sembrato più semplice così)
- Ho creato due variabili let distinte per i numeri dei giocatori, dove veniva estratto un numero  casuale da 1 a 6 per ciascun giocatore.
- Queste variabili le utilizzate per le finestre 'alert' dei giocatori.
- Ho utilizzato If, else if e else per i tre casi di decisione del vincitore (pareggio incluso).