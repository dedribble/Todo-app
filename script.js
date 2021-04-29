let listOfTasks = []
const save = document.querySelector('button');

save.addEventListener('click', function display () {
    let task = document.getElementById('tasks').value;

    listOfTasks.push(task);

    for (index = 0; index < listOfTasks.length; index++) {
        if (index === 0) {
            document.getElementById('task-one-label').innerHTML = listOfTasks[0];
        }
        if (index === 1) {
            document.getElementById('task-two-label').innerHTML = listOfTasks[1];
        }

        if (index === 2) {
            document.getElementById('task-three-label').innerHTML = listOfTasks[2];
        }

        if (index === 3) {
            document.getElementById('task-four-label').innerHTML = listOfTasks[3];
        }
        if (index === 4) {
            document.getElementById('task-five-label').innerHTML = listOfTasks[4];
        }
    }
    
        
    });
 

