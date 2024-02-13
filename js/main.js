
const todo = document.querySelector('#todo');
console.log(todo);
const button = document.querySelector('#btn');
button.classList.add('active');
console.log(button);
const todoCards = document.querySelector('#todoCards')
console.log(todoCards);
const btnSuprim = document.querySelector('.fa-trash');
console.log(btnSuprim);

function ajout() {
    const newTodoCard = todoCards.cloneNode(true);
    todo.appendChild(newTodoCard);
    console.log(todo);
}

function suppression() {
    
}

button.addEventListener('click', ajout);
