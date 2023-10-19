// *Consegna*
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Solo se l'esercizio base funziona perfettamente: create una nuova cartella chiamata bonus e copiateci dentro tutti i files e cartelle dell'esercizio base tranne la cartella .git.
// Poi procedete ad implementare il bonus come segue.
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

function squareGen() {

    wrapper.classList.remove('d-none');
    returnButton.classList.remove('d-none');
    btn.classList.add('d-none');
    select.classList.add('d-none');
    

    const squareNumber = parseInt(document.querySelector('select').value);

    for(let a = 1; a <= squareNumber; a++){
        const square = document.createElement('div');
        square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
        square.style.width = `calc(100% / ${Math.sqrt(squareNumber)})`;
        square.style.height = `calc(100% / ${Math.sqrt(squareNumber)})`;
        wrapper.append(square);
        square.innerHTML = (a);
        
        square.addEventListener('click', function(){
            square.classList.add('bg-sky', 'text-white');
            console.log(this.innerText);
        })
    }

}

const returnButton = document.getElementById('return-button');
const select = document.querySelector('select');
const btn = document.querySelector('button');
const wrapper = document.getElementById('wrapper');

btn.addEventListener('click', squareGen);
returnButton.addEventListener('click', function(){
    location.reload();
})