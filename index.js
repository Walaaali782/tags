let input = document.querySelector('.input');
let add = document.querySelector('.add');
let tasks = [];
if(window.localStorage.getItem('tasks')) {
    tasks = tasks.concat(JSON.parse(window.localStorage.tasks));
    tasks.forEach((e) => {
        let p = document.createElement('p');
        p.innerHTML = e;
        let del = document.createElement('button');
        del.innerHTML = "Delete";
        let div = document.createElement('div');
        div.append(p);
        div.append(del);
        document.querySelector('.tasks').append(div);
        del.addEventListener('click', (e) => {
          // check returns the previous element in the same tree level.
            tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
            console.log(tasks);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        })
    })
}
// document.forms[0].onsubmit = function(event){
//     event.preventDefault();
// }
add.addEventListener('click', (e) => {
    if(input.value == "") {
        return;
    } else {
        tasks = tasks.concat(input.value);
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        let p = document.createElement('p');
        p.innerHTML = input.value;
        let del = document.createElement('button');
        del.innerHTML = "Delete";
        let div = document.createElement('div');
        div.append(p);
        div.append(del);
        document.querySelector('.tasks').append(div);
        del.addEventListener('click', (e) => {
            console.log(e.currentTarget.previousElementSibling.innerHTML) //p
           tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
           console.log(tasks);
           window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        })
    }
});
// function build(){
// let tasks = document.querySelector(".tasks");
// let div = document.createElement("div");
// tasks.append(div);
// let p = document.createElement("p");
// div.append(p);
// p.textContent=input.value;
// let btn = document.createElement("button");
// div.append(btn);
// btn.textContent="Delet"
// btn.onclick = function(){
//     div.style.display="none";
// }
// }

// let input = document.querySelector(".input");
// let add = document.querySelector(".add");
// add.onclick = function(){
//   build();
// }

