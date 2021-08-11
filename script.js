let listOfTasks = []
const input = document.getElementById('tasks');
const save = document.querySelector('.save')
const taskBox = document.querySelector('.task-container')


    

save.addEventListener('click', display)


function display(e){
    e.preventDefault();
    
    
    // Adding toDoDiv
    const toDo = document.createElement('div')
    toDo.classList.add('toDoDiv')
    taskBox.appendChild(toDo);
    
    // Adding Text to the Div
    let task = document.createElement('p')
    task.classList.add('task')
    task.innerText = input.value
    toDo.appendChild(task)
    if(task.innerText == "") {
        return task.innerText = "Please enter a task"
    }
    

    // Add delete button
    let removeBtn = document.createElement('button');
    removeBtn.innerText = "remove"
    removeBtn.classList.add('removeBtn')
    toDo.appendChild(removeBtn)
    removeBtn.addEventListener('click', ()=> {
        toDo.style.display ="none"
    })

    // Add complete button
    let completeBtn = document.createElement('button');
    completeBtn.innerText = "done"
    completeBtn.classList.add('completeBtn')
    toDo.appendChild(completeBtn)
    completeBtn.addEventListener('click', ()=> {
        task.style.textDecoration = "line-through"
        completeBtn.style.backgroundColor = "#ccc"
    })

    


}