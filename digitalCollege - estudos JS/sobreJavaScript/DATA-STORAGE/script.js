let todoForm = document.getElementById('todo-form');
let inputTask = document.getElementById('input-task');
let todoList = document.getElementById('todo-list');



let taskList = window.localStorage.getItem('todo-list') ?? '[]';
taskList = JSON.parse(taskList);

for (let value of taskList) {

    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'checkbox';

    li.addEventListener('dblclick', event => {
        if (!li.style.textDecoration) {
           
        } else {

        }
        li.style.textDecoration = "line-through";
        input.checked = !input.checked;
    })

    li.textContent = value;
    li.prepend(input);
    todoList.prepend(li);


}




todoForm.addEventListener('submit', event => {
    event.preventDefault();

    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'checkbox';


    li.textContent = inputTask.value;
    li.prepend(input);
    todoList.append(li);

    taskList.push(inputTask.value);

    window.localStorage.setItem('todo-list', JSON.stringify(taskList));


    console.log(li);
})
