// parte dedicata alla gestione degli input
var surnameArray = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']; // inizializzo un array che contiene un elenco di cognomi non ordinato
var newSurname = prompt('Inserire il proprio cognome'); // all'utente, in avvio, verrà chiesto di inserire il proprio cognome, che sarà salvato nella variabile newSurname

// parte dedicata alla gestione della logica
surnameArray.push(newSurname); // il cognome inserito dall'utente viene aggiunto ai cognomi non ordinati già presenti all'interno dell'array
surnameArray.sort(); // la funzione sort riordina le stringhe presenti nell'array in ordine alfabetico. Non ho bisogno di assegnare le stringhe riordinate ad un altro array, tramite l'assegnazione ad un'altra variabile, sort è intelligente

// parte dedicata alla gestione degli output
var olSurname = document.getElementById('olSurname'); // ho collegato la mia variabile olSurname alla lista con id olSurname
for(var i = 1; i < surnameArray.length; i++){
// ciclo che viene eseguito per un numero di volte uguale al numero degli elementi presenti nell'array
  olSurname.innerHTML += '<li>' + surnameArray[i] + '</li>'; // alla ol nell'html viene aggiunto, per ogni elemento dell'array, il cognome, all'interno di un tag li
}
