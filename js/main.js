
const todo = document.querySelector('#todo');
const button = document.querySelector('#btn');
const todoCards = document.querySelector('#todoCards');

button.classList.add('active');

function ajout() {
    const newTodoCard = todoCards.cloneNode(true);
    todo.appendChild(newTodoCard);
    // Ajouter un gestionnaire de clic pour le bouton de suppression sur cette nouvelle carte
    newTodoCard.querySelector('.fa-trash').addEventListener('click', function() {
        newTodoCard.remove();
    });
    // Pour supprimer todoCards Parent
    todoCards.querySelector('.fa-trash').addEventListener('click', () =>{
        todoCards.remove();
    })
}

button.addEventListener('click', ajout);
