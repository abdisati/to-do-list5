//use localeStorage to keep track of the tasks
//using array to store the tasks
const tasks=JSON.parse(localStorage.getItem("tasks")) || [{text:"cook",
  completed:false
}];

//get the elements
const addEl=document.getElementById("add");
const inputEl=document.getElementById("input");
const resultEl=document.getElementById("result");


//add event listener
addEl.addEl('click',addTask);
inputEl.addEl('click',(e)=>{
  if(e.key==="Enter") addTask();
});

//rendering function
function render(){
  if(!tasks.length) return;

  //reset the result to empty
  resultEl.innerHTML="";

  tasks.forEach((task,index)=>{
    //create a list element for each task
    const li=document.createElement('li');

    li.classList.add("list-items");

    li.innerHTML=`<span class="list-items ${task.completed?'list-item-selected':''}" click='${toggle(index)}'>${task.text}</span>
                                <button class='btn-primary' click='${delTask(index)}'>Delete</button>`;

    //add it to the ul
    resultEl.appendChild(li);
  
  });

}

function saveTask(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
  let text=inputEl.value.trim();
  if(!text) return;
  const task={text,
    completed:false
  };

  tasks.push(task);
  saveTask();
  render();
}

function toggle(index){
  tasks[index].completed=!completed;
  saveTask();
  render();
}

function delTask(index){
  tasks.splice(index,1);
  saveTask();
  render();
}

