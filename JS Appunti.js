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

const people = ['mario', 'luigi', 'wario'];        // oppure presa da un DB

people.forEach(person => {         // array function con un solo valore non servono le parentesi 
    content.innerHTML += `<p>${person}</p>`;  // richiamo la variabile content creata sopra
});

// questo mi genera una serie di html per tutti i valori della mia array


// getAttribute()  e setAttribute() => attributes sono tipo "class" o "href" etc

const variabile = document.querySelector('a');  // prendo il riferimento all'anchor tag con querySelector

console.log(variabile.getAttribute('href'));  // => getAttribute() per sapere che attribute ha quell'elemento che metto tra () e tra ''
variabile.setAttribute('href', 'https://...');    // tra () metto prima ciò che voglio cambiare e poi il valore con cui lo voglio cambiare

variabile.innerText = 'qualcosa'           // posso anche cambiare il testo del link così

variabile.setAttribute('nuova', 'color: green');       // così posso aggiungere elementi che non esistevano nell'HTML



// con setAttribute() posso anche sovrascrivere style di CSS ma se non volessi sovrasscrivere c'è la .style property 

const variabile = document.querySelector('h1');

console.log(variabile.style.color);   // per vedere il color del css nell'html

variabile.style.margin = '50px';    // così aggiungo style al css, se avessi fatto variabile.setAttribute('style', 'margin = 50px;') lui avrebbe sovrascritto gli altri styles



variabile.style.margin = '';  // così rimuovo uno style


/* Cambiare Classi */

variabile.classList.add('nomeClasseDaAggiungere');      // classList restituisce le classi

variabile.classList.remove('nomeClasseDaAggiungere');   // per rimuovere

// se volessi ciclare tra elementi HTML per aggiungere una classe error agli 'p' dove c'è la parola error e 'success' dove c'è la parola 'success' =>

const variabile = document.querySelectorAll('p');

variabile.forEach(x => {
    if(x.textContent.includes('error')){             // textContent mostra tutto ciò che è compreso come testo nell'HTML mentre innerText se ci fossero elementi display none non li mostrerebbe
        x.classList.add('error');               // classList.add('ciò che voglio aggiungere)
    }
    if(x.textContent.includes('success')){
        x.classList.add('success');             // qui aggiungo success. Se volessi rimuovere potrei fare x.classList.remove('daRimuovere')
    }         
});

// se volessi togliere un elemento che ha una certa classe e tenere un elemento che NON ha una classe => TOGGLE

const variabile = document.querySelector('.test');

test.classList.toggle('test1');         // qui dato che non trova classi con test1 la aggiunge
test.classList.toggle('test1');         // qui dato che troverà la classe test1 la rimuoverà


// se volessi vedere i children di un elemento

const parent = documentquerySelector('parent');

console.log(parent.children);   //// problema è che restituisce un HTML collection sulle quali NON si può ciclare (si può ciclare su node list o su array ma NON su HTML collection)

// allora  convertiamo questa HTML collection in una array

Array.from(parent.children)                 // => qui ritorniamo un NUOVO value, non è distruttiva
console.log(Array.from(parent.children));

// se volessi ciclare ora potrei farlo:

Array.from(parent.children).forEach((child) => {                    // come parametro metto child così mi ritorna quello ogni volta che itera
    child.classList.add('article-element');
});

// se volessi trovare il parent di un elemento

const x = documentquerySelector('elementoChild');

console.log(x.parentElement);

// posso anche incatenarne più di una insieme per trovare i vari parent o child

console.log(x.parentElement.parentElement);   // trova il parent del parent

// se non conosco il parent o il child di un elemento posso scoprirlo

console.log(x.nextElementSibling);

console.log(x.previousElementSibling);