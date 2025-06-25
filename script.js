// 1. Seleccionar el formulario, el input y la lista
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

tareas.forEach(texto => {
    todoList.appendChild(crearTarea(texto));
}); 

// 2. Función que crea un elemento <Li> con texto y botón de eliminar
function crearTarea(texto) {
    const li = document.createElement('li');
    li.textContent = texto;

    // Boton de eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Listo';
    btnEliminar.className = 'delete-btn';
    btnEliminar.addEventListener('click', () => {
        todoList.removeChild(li);
        tareas = tareas.filter(t => t !== texto);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    });

    // Ajustamos el li para que contenga boton aparte
    li.appendChild(btnEliminar);
    return li;
}

// 3. Evento al enviar el formulario (clic en "Agregar" o Enter)
todoForm.addEventListener('submit', event => {
    event.preventDefault();
    const tareaTexto = todoInput.value.trim();
    if (tareaTexto === '') return;

    const nuevaTarea = crearTarea(tareaTexto);
    tareas.push(tareaTexto);
    localStorage.setItem('tareas', JSON.stringify(tareas));

    todoList.appendChild(nuevaTarea);
    todoInput.value = '';
    todoInput.focus();
})

const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}