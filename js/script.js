var newTaskInput = document.getElementById('new__task-input');
var newTaskButton = document.getElementById('new__task-button');
var taskContainer = document.getElementById('task__container');
var taskContent = document.getElementById('task__content');

newTaskButton.addEventListener('click', e => {
    e.stopPropagation();

    if (newTaskInput.value.length === 0 || !newTaskInput.value.replace(/\s/g, '').length) {
        console.log("Inserisci testo");

        newTaskInput.classList.add('input--error');
    } else {

        taskContainer.innerHTML += '<li id="task">' +
            '<div class="task--content">' +
            '<p class="task--body">' + newTaskInput.value.trim() + '</p>' +
            '</div>' +
            '</li>';

        newTaskInput.classList.remove('input--error');
        newTaskInput.value = '';
    }

})