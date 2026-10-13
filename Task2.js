//--------To-Do List JS---------

let todoInput = document.querySelector(".todo-input input");
let todoBtn = document.querySelector(".todo-btn");
let ul = document.querySelector(".todo-ul");

todoBtn.addEventListener("click",function() {
    let inputText = todoInput.value.trim();
    if(inputText===""){
        alert("Write your task in task box");
        return;
    }
    
    let li = document.createElement("li");
    li.className = "todo-li";
    li.innerHTML = `
    <span>${inputText}</span>
    <button class="todo-li-btn">Remove</button>
    `
    li.querySelector("button").addEventListener("click",function() {
        li.remove();
    });
    ul.appendChild(li);
    todoInput.value="";
});


//---------FORM JS-----------

let nameInput = document.querySelector("#name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");
let feedback = document.querySelector("#feedback");
let form = document.querySelector("form");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    let nameText = nameInput.value.trim();
    let numberText = number.value.trim();
    let emailText = email.value.trim();
    
    if(nameText === "") {
        alert("Please enter your name");
        nameInput.focus();
        return;
    }
    
    let numRagex = /^[0-9]{10}$/;
    if(!numRagex.test(numberText)) {
        alert("Please enter valid 10-digit number");
        number.focus();
        return;
    }
    
    let emailRagex = /^[^\s@]+@[^\s@]+\.[^0-9\s@]+$/;
    if(!emailRagex.test(emailText)) {
        alert("Please enter a valid email");
        email.focus();
        return;
    }
    
    alert("Form Submitted Successfully");
    form.reset();
});
