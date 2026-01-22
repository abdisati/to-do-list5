//use localeStorage to keep track of the tasks
//using array to store the tasks
const tasks=JSON.parse(localStorage.getItem("tasks")) || [];

//get the elements
const addEl=document.getElementById("add");
const inputEl=document.getElementById("input");
const resultEl=document.getElementById("result");


//add event listener
addEl.addEventListener('click',addTask);
inputEl.addEventListener('keydown',(e)=>{
  if(e.key==="Enter") addTask();
});

resultEl.addEventListener('click',(e)=>{
   const target = e.target.closest('[data-index]');
  if(!target) return; 
  const index=Number(target.dataset.index);

  if(e.target.tagName==='SPAN'){
    // call toggle
    toggle(Number(index)); //convert it to number i.e dataset is in string
  }

  if(e.target.tagName==='BUTTON'){
    delTask(Number(index));
  }
});

//rendering function
function render(){
   resultEl.innerHTML="";
  if(!tasks.length) return;




  tasks.forEach((task,index)=>{
    //create a list element for each task
    const li=document.createElement('li');

    li.classList.add("list-items");

    li.innerHTML=`<span class="list-items ${task.completed?'list-item-selected':''}" data-index="${index}">${task.text}</span>
                                <button class='btn-primary' data-index="${index}" >Delete</button>`;

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
  inputEl.value="";
}

function toggle(index){
  console.log(index);
  console.log(tasks[index]);
  tasks[index].completed=!tasks[index].completed;
  saveTask();
  render();
}

function delTask(index){
  tasks.splice(index,1);
  saveTask();
  render();
}



