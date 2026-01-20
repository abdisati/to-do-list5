//use localeStorage to keep track of the tasks
//using array to store the tasks
const tasks=JSON.parse(localStorage.getItem("tasks")) || [{text:"cook",
  completed:false
}];

//get the elements
const addEl=document.getElementById("add");
const inputEl=document.getElementById("input");
const resultEl=document.getElementById("result");

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
                                <button class='btn-primary' click='${dele(index)}'>Delete</button>`;

    //add it to the ul
    resultEl.appendChild(li);
  
  });

}

function save(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

