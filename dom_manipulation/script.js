const btn1 = document.getElementById('enterList1Item');
const input1 = document.getElementById('list1Input');
const list1 = document.getElementById('list1');
let listContainer = document.getElementsByClassName('list-container');

function dropdownList() {
  list1.classList.toggle('hide');
}

function inputLength() {
  return input1.value;
}

function createListElement() {
  let li = document.createElement('li');
  let p = document.createElement('p');
  let btn = document.createElement('button');

  li.classList.add('list-container');
  btn.classList.add('delete');
  btn.appendChild(document.createTextNode('X'));

  li.appendChild(p);
  li.appendChild(btn);

  p.appendChild(document.createTextNode(input1.value));
  list1.appendChild(li);
  input1.value = '';

  markDone();
  deleteItem();
}

function addAfterClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addAfterEnter(e) {
  if (inputLength() && e.code === 'Enter') {
    createListElement();
  }
}

function markDone() {
  let item = document.querySelectorAll('p');
  console.log('item', item);

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', () => {
        item[i].classList.toggle('done');
    });
  }
}

function deleteItem() {
  let deleteBtn = document.querySelectorAll('button');
  console.log('delete', deleteBtn);

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
      if (deleteBtn[i].className === 'delete') {
        deleteBtn[i].parentElement.remove();
      }
    });
  }
}

btn1.addEventListener('click', addAfterClick);

input1.addEventListener('keypress', addAfterEnter);

markDone();
deleteItem();
