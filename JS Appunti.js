/* - document.querySelector()

prende solo il primo elemento che indico tra ()*/

const nuovaVariabileDoveStorareContenutoUpdatato = document.querySelector('p');

// poi per farlo vedere 

console.log(nuovaVariabileDoveStorareContenutoUpdatato.innerText)  // => vedo i contenuti di p

// se lo voglio modificare faccio 

nuovaVariabileDoveStorareContenutoUpdatato.innerText = 'qualcosa'  // => così modifico direttamente il conenuto di p

// se invece voglio solo appendere faccio uguale + nuovaVariabileDoveStorareContenutoUpdatato.innerText += 'qualcosa' => così modifico direttamente il conenuto di p

- document.querySelectorAll('ciò che voglio')

// questo prende tutti quelli indicati nelle ()

// se volessi iterare tra tutti gli elementi che seleziono e aggiungere qualcosa a tutti quegli elementi allora  basta fare un forEach():

nuovaVariabileDoveStorareContenutoUpdatato.forEach(nomeVariabile => {
    console.log(nomeVariabile.innerText);
    nomeVariabile.innerText += 'new Text';

});

// [ovviamente se invece vuoi updatare devi fare = invece di +=]



// Nel caso in cui dovessi lavorare sulle classe invece:

const variabile = document.querySelectorAll('.nomeClasse');

    console.log(content.innerHTML);



// così vedi l'HTML e per modificarlo basta fare:

variabile.innerHTML = '<h2>modifica</h2>'

// e come prima se voglio appendere +=


// ora se volessi generare un HTML per una array di valori potrei fare:

const content = document.querySelector('.nomeClasse')

const people = ['mario', 'luigi', 'wario'];

people.forEach(person => {         // array function con un solo valore non servono le parentesi 
    content.innerHTML += `<p>${person}</p>`;  // richiamo la variabile content
});

// questo mi genera una serie di html per tutti i valori della mia array


// getAttribute()  e setAttribute()

