const button = document.querySelector('button');

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something New</li>';       potrei fare così ma meglio creare un nuovo li tag
    const li = document.createElement('li');    // ora ho la referenza all'elemento ma importante storarlo in una variabile
    li.textContent = prompt('');     // ora devo rimandare a quell'elemento e fare textContent
    // ul.append(li);
    ul.prepend(li);
});


/*

questo è il primo ToDo ma non attaccando l'event listener a tutti i 'li' ma solo a quelli già presenti
(non raccoglie i nuovi ToDo aggiunti) allora uso l'ul e metto l'event listener a quello con la condizione che il tagName sia uguale a 'LI'


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        // e.target.style.textDecoration = 'line-through';
        e.stopPropagation();  // fermare il bubbling da LI a UL che farebbe se non lo fermassimo
         e.target.remove();
    });
});

*/


const ul = document.querySelector('ul');

    ul.addEventListener('click', (e) => {
        if(e.target.tagName === 'LI'){
            e.target.remove();
        };
});