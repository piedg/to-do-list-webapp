console.log("Hello World!");

var newTaskInput = document.getElementById('new__task-input');
var newTaskButton = document.getElementById('new__task-button');
var taskContainer = document.getElementById('task__container');
var taskContent = document.getElementById('task');


newTaskButton.addEventListener('click', e => {
    e.stopPropagation();

    if (newTaskInput.value.length != 0) {
        console.log(newTaskInput.value);
    } else 
    console.log("Inserisci testo")


})