
const todoList = [{
  name:'washing',
  dueDate:'2022-12-22'
},
{
  name:'cleaning',
  dueDate:'2022-12-22'
}];
renderTodoList();
function renderTodoList(){
let todoListHTML = '';


todoList.forEach((todoObject,index)=>{
 
  const {name,dueDate} = todoObject;
  const html =`
   <div>
   ${name}
   </div>
  <div>${dueDate}</div>
   <button onclick="
    " class="btn2 js-btn2">Delete</button>
   
  `;
  todoListHTML +=html;
});



document.querySelector('.js-todoList')
.innerHTML = todoListHTML;
console.log(document.querySelectorAll('.js-btn2').forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index,1);
    renderTodoList();
  });

}));

}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;
 todoList.push({name,
  dueDate});
 
 inputElement.value = '';

 renderTodoList();
}
document.querySelector('.js-btn')
.addEventListener('click',()=>{
addTodo();
});
