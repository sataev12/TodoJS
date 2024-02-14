const todo = document.querySelector('#todo');
const button = document.querySelector('#btn');
const todoCards = document.querySelector('#todoCards');
const textArea = document.querySelector('.task');
const body = document.body;

button.classList.add('active');

let divCount = document.createElement("div");
divCount.classList.add("counter");
body.appendChild(divCount)

// Fonction pour compter le nombre de cartes
function countCards() {
    // Sélectionne tous les éléments avec la classe '.todoCard'
    const cards = document.querySelectorAll('.todoCard');
    // Retourne la longueur du NodeList, qui correspond au nombre de cartes
    return cards.length;
}

// Fonction pour afficher le nombre de cartes sur l'écran
function displayCardCount() {
    const counterElement = document.querySelector('.counter');
    // Mettre à jour le contenu du compteur avec le nombre actuel de cartes
    counterElement.textContent = `Nombre de cartes : ${countCards()}`;
}

function ajout() {
    const newTodoCard = todoCards.cloneNode(true);
    todo.appendChild(newTodoCard);
    newTodoCard.querySelector('.fa-trash').addEventListener('click', function() {
        newTodoCard.remove();
        // Mettre à jour le nombre de cartes après la suppression
        displayCardCount();
    });
    // Pour supprimer todoCards Parent
    todoCards.querySelector('.fa-trash').addEventListener('click', () =>{
        todoCards.remove();
        // Mettre à jour le nombre de cartes après la suppression
        displayCardCount();
    });
    // Mettre à jour le nombre de cartes après l'ajout
    displayCardCount();
}

button.addEventListener('click', ajout);


displayCardCount();
