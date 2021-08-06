let listOfTasks = []
const save = document.querySelector('button');
const box = document.createElement('div');
const header = document.createElement('h1')
const text = document.createTextNode("Today's Task")
const taskBox = document.createElement('section')
const task = document.createElement('p')

save.addEventListener('click', (e)=> {
    e.preventDefault();

    display();
})
 

function display (){
    listOfTasks.push(task.innerHTML);
   document.body.appendChild(box);
   box.appendChild(header)
   box.appendChild(taskBox);
   header.appendChild(text)
   box.style.width = '260px'
   box.style.backgroundColor = "#f3f2f2";
   box.style.marginTop = "20px"
   box.style.padding = "10px"
   box.style.borderRadius = "6px"
   header.style.fontSize = "18px";
   taskBox.style.padding = "6px"
   taskBox.style.borderRadius = "6px"
   taskBox.style.backgroundColor = "#00c278"
   
}