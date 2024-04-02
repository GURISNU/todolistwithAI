// Load stored todos from local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span style="text-decoration: ${todo.completed ? 'line-through' : 'none'}; color: ${todo.completed ? '#888' : 'inherit'}">${todo.text} (${todo.date})</span>
            <button class="remove-btn" onclick="removeTodo(${index})">Remove</button>
            <button onclick="toggleTodo(${index})">${todo.completed ? 'Undo' : 'Complete'}</button>
        `;
        todoList.appendChild(li);
    });
}


function addTodo() {
    const todoInput = document.getElementById('todo');
    const dateInput = document.getElementById('date');
    const todoText = todoInput.value.trim();
    const dateText = dateInput.value;
    if (todoText !== '') {
        const todo = {
            text: todoText,
            date: dateText,
            completed: false
        };
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        todoInput.value = '';
        dateInput.value = '';
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

renderTodos();
