// DOM elements, first the input fields, after output fields

const centesimi = document.querySelector('.centesimi');
const oreInMinuti = document.querySelector('.oreInMinuti');
const minutiInOre = document.querySelector('.minutiInOre');

const resultp = document.getElementById('resultp');
const idore = document.getElementById('idore');

centesimi.addEventListener('click', e => {
    e.preventDefault();

    centesimi.innerHTML = prompt();
    if (centesimi.innerHTML !== '') {
        return resultp.innerHTML =  `il valore in sessantesimi è ${centesimi.innerHTML * (60/100)}`
    } else {
        centesimi.innerHTML = alert(`Non inserisci nulla?`)
    }
});

oreInMinuti.addEventListener('click', e => {
    e.preventDefault();

    oreInMinuti.innerHTML = prompt();
    if (oreInMinuti.innerHTML !== '') {
        return idore.innerHTML =  `il valore in ore è ${oreInMinuti.innerHTML * 60}`
    } else {
        oreInMinuti.innerHTML = alert(`Non inserisci nulla?`)
    }
});

minutiInOre.addEventListener('click', e => {
    e.preventDefault();

    minutiInOre.innerHTML = prompt();
    if (minutiInOre.innerHTML !== '') {
        return idminuti.innerHTML =  `il valore in ore è ${minutiInOre.innerHTML / 60}`
    } else {
        minutiInOre.innerHTML = alert(`Non inserisci nulla?`)
    }
});



/*


al posto di getElementsById si possono usare:

- document.querySelector()

prende solo il primo elemento che indico tra ()

codice di gu con html tra commento 

function centesimiInSessantesimi(){
    let input = prompt("Inserisci il valore in centesimi.");
    if(input!="") {
        document.getElementById("resultp").innerHTML = `il valore in sessantesimi è ${input * (60/100)}`;
    } else {
        document.getElementById("resultp").innerHTML = `Vuoto!`;
    }
}



function oreInMinuti(){
    let input = prompt("Inserisci il valore in Ore");
        if (input!="") {
            document.getElementById("idore").innerHTML = `il valore in minuti è ${input * 60}`;
        } else {
            document.getElementById("idore").innerHTML = `Vuoto!`;
        }
}


function minutiInOre(){
    let input = prompt("Inserisci il valore in Minuti");
    if (input!="") {
        document.getElementById("idminuti").innerHTML = `il valore in ore è ${input / 60}`;
    } else {
        document.getElementById("idminuti").innerHTML = `Vuoto!`;
    }
}




const nuovaVariabileDoveStorareContenutoUpdatato = document.querySelector('p');

poi per farlo vedere console.log(nuovaVariabileDoveStorareContenutoUpdatato.innerText) => vedo i contenuti di p

se lo voglio modificare faccio nuovaVariabileDoveStorareContenutoUpdatato.innerText = 'qualcosa' => così modifico direttamente il conenuto di p

se invece voglio solo appendere faccio uguale + nuovaVariabileDoveStorareContenutoUpdatato.innerText += 'qualcosa' => così modifico direttamente il conenuto di p

- document.querySelectorAll('ciò che voglio')

questo li prende tutti quelli indicati nelle ()

se volessi iterare tra tutti gli elementi che seleziono e aggiungere qualcosa a tutti quegli elementi allora  basta fare un forEach:

nuovaVariabileDoveStorareContenutoUpdatato.forEach(nomeVariabile => {
    console.log(nomeVariabile.innerText);
    nomeVariabile.innerText += 'new Text';

});

[ovviamente se invece vuoi updatare devi fare = invece di +=]



Nel caso in cui dovessi lavorare sulle classe invece:

const variabile = document.querySelectorAll('.nomeClasse');

    console.log(content.innerHTML);



così vedi l'HTML e per modificarlo basta fare:

variabile.innerHTML = '<h2>modifica</h2>'

e come prima se voglio appendere +=

// ora se volessi generare un HTML per una array di valori potrei fare:

const content = document.querySelector('.nomeClasse')

const people = ['mario', 'luigi', 'wario'];

people.forEach(person => {         // array function con un solo valore non servono le parentesi 
    content.innerHTML += `<p>${person}</p>`;  // richiamo la variabile content
});

// questo mi genera una serie di html per tutti i valori della mia array


// getAttribute()  e setAttribute()

https://web.dev/read-files/#select-input

*/