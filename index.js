
let obj2;

fetch('https://rn-todo-app-c27d4.firebaseio.com/todos.json')
  .then(response => myJson = response.json())
  .then(response => {
    obj2 = response;

let  keys = Object.keys(obj2);

for (let i = 0, l = keys.length; i < l; i++) {
  console.log(obj2[keys[i]].title);

  var arr = [];

  for (let i=0; i<keys.length; i++) {
    arr.push(obj2[keys[i]].title)    
  }
  // console.log(arr)
}  
console.log(arr);

function addList () {
  html = '<div class="todoListern">';
    arr.forEach(function(item) {
      html +='<div class="todoText">'
      +item
      +'<div class="todoIcon">'
      +'<i class="far fa-trash-alt" id="trash"></i>'
      +'<i class="fas fa-exclamation" id="exclamation"></i>'
      +'</div>'
      +'</div>';
    });
  html += '</div>'

let list = document.querySelector('#list').innerHTML=html;
};

addList ();

  add.addEventListener('click', () => {
    arr.push(addInput.value);
    console.log(arr);
    addList ();
  });
});
