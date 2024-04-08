window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.getElementById('#name');
    const newTodoForm = document.getElementById('#new-todo-form');

    const username = localStorage.getItem('username');

    nameInput.value = username;

    nameInput.addEventListener('input', e => {
        localStorage.setItem('username', e.target.value);
    });

    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements['content'].value,
            category: e.target.elements['category'].value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();
    })
})



