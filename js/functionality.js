const button = document.getElementById('mySubmitButton');
const textInput = document.getElementById('descriptionInput');
const dateInput = document.getElementById('dateInput');
const listUIElement = document.getElementById('list');

let listOfTasks = []


button.onclick = e => {
    e.preventDefault();
    addTask();
    resetForm();
    renderListOfTasks();
}

function resetForm() {
    textInput.value = '';
    dateInput.value = '';
}

function addTask() {
    console.log('estos son los valores actuales de text y date', textInput.value, dateInput.value)
    const newTask = {name: textInput.value,dueDate: dateInput.value}
    listOfTasks.push(newTask);
}

const renderListOfTasks = () => {
    console.log('renderizando lista de tareas')

    listUIElement.innerHTML = '';

    listOfTasks.forEach((task,index) => {
        const liElement = document.createElement('li');
        liElement.className = 'item'
        const nameElement = document.createElement('p');
        nameElement.innerText = task.name;
        const dateElement = document.createElement('p');
        dateElement.innerText = task.dueDate;

        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'ELIMINAR'
        buttonElement.onclick = () => {
            removeTask(index);
            renderListOfTasks();
        }

        liElement.appendChild(nameElement)
        liElement.appendChild(dateElement)
        liElement.appendChild(buttonElement)

        listUIElement.appendChild(liElement);
    })
}

function removeTask(indexOfTaskToBeRemoved) {
    listOfTasks = listOfTasks.filter((task, index) => index !== indexOfTaskToBeRemoved);
}