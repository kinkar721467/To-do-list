let main_btn = document.querySelector('#input-btn');
let input_box = document.querySelector('#input-box');
let list_contain =document.querySelector('#list-contain');
main_btn.addEventListener('click',()=> {
if(input_box.value === '') {
    alert("you must write someting");
}else {
    let li = document.createElement('li');
    li.innerHTML = input_box.value;
    list_contain.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    list_contain.appendChild(li);
}
input_box.value = '';
saveData();
});

list_contain.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('check');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        document.getElementById('myAudio').play();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data",list_contain.innerHTML);
}

function showData() {
    list_contain.innerHTML  =localStorage.getItem('data');
}

showData();
