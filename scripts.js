const addBtn = document.querySelector("button");
const input = document.getElementById("add-item");
const ul = document.querySelector("ul");

//removes item from list via button
const deleteItem = (item) => {
    item.target.removeEventListener('click', deleteItem);
    item.target.parentNode.remove();
}

// adds a new item to the list
const newListItem = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  const dltBtn = document.createElement('button');
  dltBtn.appendChild(document.createTextNode('x'));
  li.appendChild(dltBtn);
  dltBtn.addEventListener('click', deleteItem)
};

// Add warning if input empty


//checks for input then adds input to list via button
const addItem = () => {
  if (input.value.length > 0) {
    newListItem();
  }
};

// same but via return key
const addReturnKey = (key) => {
    if (input.value.length > 0 && key.which === 13) {
        newListItem();
    }
}

//strikethrough item to show it's done
const done = (event) => {
    event.target.classList.toggle('done');
}


addBtn.addEventListener("click", addItem);
input.addEventListener('keypress', addReturnKey);
ul.addEventListener('click', done);