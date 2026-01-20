//use localeStorage to keep track of the tasks
//using array to store the tasks
const tasks=JSON.parse(localStorage.getItem("tasks")) || [];

//get the elements
const addEl=document.getElementById("add");
const inputEl=document.getElementById("input");
const resultEl=document.getElementById("result");