var newTaskInput = document.getElementById('new__task-input');
var newTaskButton = document.getElementById('new__task-button');
var taskContainer = document.getElementById('task__container');
var taskListEmpty = document.getElementById('task__list-empty');

var task = document.getElementById('task--');
var taskIconCheck = document.getElementById('task__checked');

var taskNum = 0;

newTaskButton.addEventListener('click', newTask);
newTaskInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        newTask();
    }
});

function newTask() {

    if (newTaskInput.value.length === 0 || !newTaskInput.value.replace(/\s/g, '').length) {
        newTaskInput.classList.add('input--error');

    } else {
        //Add task on top of the <ul>
        taskContainer.insertAdjacentHTML('afterbegin', '<li id="task--' + taskNum + '">' +
            '<div class="task--content">' +
            '<span class="material-icons icon--task-check" id="task__checked">' +
            'radio_button_unchecked' +
            '</span>' +
            '<p class="task--body">' + newTaskInput.value.trim() + '</p>' +
            '</div>' +
            '</li>');

        newTaskInput.classList.remove('input--error');
        newTaskInput.value = '';
    }

    taskNum++;

    if (taskContainer.children.length > 0) {
        taskListEmpty.style.display = 'none';
    } else {
        taskListEmpty.style.display = 'block';
    }
}

if (taskIconCheck) {
    taskIconCheck.addEventListener('click', completeTask);

}

function completeTask() {
    taskIconCheck.innerHTML = 'radio_button_check';
}

function removeTask() {

    idTask = task + taskNum
    console.log(idTask)
}