/* Theme Toggle */

const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click",

    function(){

        document.body.classList.toggle("dark-mode");

    });

}

/* Login */

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",

    function(event){

        event.preventDefault();

        alert("Login Successful!");

    });

}

/* Project Form */

const projectForm =
document.getElementById("projectForm");

if(projectForm){

    projectForm.addEventListener("submit",

    function(event){

        event.preventDefault();

        alert("Project Created Successfully!");

        projectForm.reset();

    });

}

/* Tasks */

const tasks = [

{
    title:"UI Design",

    assigned:"Ajay",

    deadline:"2026-06-10",

    status:"Pending"
},

{
    title:"Frontend Development",

    assigned:"Rahul",

    deadline:"2026-06-15",

    status:"In Progress"
},

{
    title:"Database Setup",

    assigned:"Kiran",

    deadline:"2026-06-20",

    status:"Completed"
},

{
    title:"API Integration",

    assigned:"Vijay",

    deadline:"2026-06-25",

    status:"Pending"
}

];

/* Task Container */

const taskContainer =
document.getElementById("taskContainer");

/* Display Tasks */

function displayTasks(items){

    if(!taskContainer) return;

    taskContainer.innerHTML = "";

    items.forEach(task => {

        let statusClass = "";

        if(task.status === "Pending"){

            statusClass = "pending";

        }

        else if(task.status === "In Progress"){

            statusClass = "progress";

        }

        else{

            statusClass = "completed";

        }

        const card =
        document.createElement("div");

        card.classList.add("task-card");

        card.innerHTML = `

        <h2>${task.title}</h2>

        <p><strong>Assigned:</strong>
        ${task.assigned}</p>

        <p><strong>Deadline:</strong>
        ${task.deadline}</p>

        <span class="status ${statusClass}">

        ${task.status}

        </span>

        `;

        taskContainer.appendChild(card);

    });

}

displayTasks(tasks);

/* Search */

const searchInput =
document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup",

    function(){

        const value =
        searchInput.value.toLowerCase();

        const filtered =
        tasks.filter(task =>

            task.title
            .toLowerCase()
            .includes(value)

        );

        displayTasks(filtered);

    });

}

/* Animated Counters */

function animateValue(id,start,end,duration){

    const obj =
    document.getElementById(id);

    if(!obj) return;

    let range = end - start;

    let current = start;

    let increment =
    end > start ? 1 : -1;

    let stepTime =
    Math.abs(Math.floor(duration / range));

    let timer =
    setInterval(function(){

        current += increment;

        obj.textContent = current;

        if(current == end){

            clearInterval(timer);

        }

    },stepTime);

}

animateValue("projectCount",0,25,2000);

animateValue("taskCount",0,140,2000);

animateValue("teamCount",0,32,2000);