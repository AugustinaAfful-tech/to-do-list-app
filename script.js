function addTask() {
const taskInput =
document.getElementById("taskInput");
const taskList =
document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";

    updateCount();
}

function updateCount() {
    const total = document.querySelectorAll("#taskList li").length;

    document.getElementById("taskCount").textcontent = "Tasks: " + total;

    console.log("Count updated");
}

loadTask();

taskInput.addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
        addTask();
    }
})

function addTask(){
    const taskText = taskInput.ariaValueMax.trim();
    
    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    createTask(taskText,false);

    saveTask();

    taskInput.value="";
}

function createTask(text,completed){
    const li = document.createElement("li");

    if(completed){
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = text;

    span.addEventListener("click",function() 
    {
         li.classList.toggle("completed");
         saveTasks();
    });
    const btnContainer = document.createElement("div");

    btnContainer.classList.add("task-buttons");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function(){

        const newText = prompt("Edit task",span.textContent);

        if(newText && newText.trim() !== "") 
    {
        span.textcontent = newText.trim();
        saveTask();
          }
    };

    const deletBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
        saveTasks();
        updateCount();
    };

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

    updateCount();
}

function clearAll(){
    
    if(confirm("Delete all tasks")){
        taskList.innerHTML="";
        saveTasks();
        updateCount();
    }
}

function addTask() {
    console.log("Add clicked");
    
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";
}

function toggleDarkMode() {
    console.log("Dark mode clicked");
}

function updateCount(){
    const total = taskList.children.length;

    document.getElementById("taskCount").textContent = "Tasks:" + total;
}

function saveTasks(){
    
    const tasks=[];

    document.querySelectorAll("#taskList li").forEach(li=>{

        tasks.push({
            text:
    li.querySelector("span").textContent,
            completed:
    li.classList.contains("completed")
        });
        });

    localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    function loadTasks(){

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        tasks.forEach(task=>{

    createTask(task.text,task.completed);
        });
    }

    function toggleDarkeMode() {
        document.body.classList.toggle("dark");
        console.log("Dark mode clicked");
    }

    function toggleDarkMode() {
        alert("Dark Mode button clicked");
        document.body.classList.toggle("dark");
    }

    function updateUI() {
        document.getElementById("count").innerText = "Tasks: " + tasks.length;
    }

   