// selecting items
const alert = document.querySelector(".alert");
const form = document.querySelector(".app__form");
const formInput = document.querySelector("#groceryItemInput");
const submitBtn = document.querySelector(".form__submit--btn");
const listContainer = document.querySelector(".output");
const list = document.querySelector(".output__list");
const listItem = document.querySelectorAll(".item");
const clearItems = document.querySelector("#clearItems");
//edit option
let editElement;
let editFlag = false;
let editID = "";
// adding events
form.addEventListener("submit", addItem);
clearItems.addEventListener("click", clearLists);

// *** FUNCTIONS ***
//adding items
function addItem(e) {
  e.preventDefault();
  const value = formInput.value;
  const id = new Date().getTime().toString();
  //console.log(id);
  if (value && !editFlag) {
    const element = document.createElement("div");
    element.classList.add("item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="item__title m-0">${value}</p>
    <div class="item__control">
      <button class="button item__edit--btn">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="button item__delete--btn">
        <i class="bi bi-trash"></i>
      </button>
    </div>`;
    const deleteBtn = element.querySelector(".item__delete--btn");
    const editBtn = element.querySelector(".item__edit--btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    //appending element
    list.appendChild(element);
    //showing succcess message
    displayMessage("Item added to the list", "success");
    //showing list container
    listContainer.classList.add("output--show");
    //adding to the local storage
    addToLocalStorage(id, value);
    //setback to defaults
    setBackToDefaults();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayMessage("Item edited", "success");
    editLocalStorage(id, value);
    setBackToDefaults();
  } else {
    console.log("blank input");
    displayMessage("Please check input", "danger");
  }
}

// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    listContainer.classList.remove("output--show");
  }
  displayMessage("Item deleted", "danger");
  deleteFromLocalStorage(id);
}
// edit item
function editItem(e) {
  //console.log("editing");
  const element = e.currentTarget.parentElement.parentElement;
  // set edit element
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //set form value
  formInput.value = editElement.innerHTML;
  editID = element.dataset.id;
  editFlag = true;
  submitBtn.textContent = "edit";
}
// showing message
function displayMessage(message, messageType) {
  alert.textContent = message;
  alert.classList.add(`alert-${messageType}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${messageType}`);
  }, 1000);
}

// *** setting back to defaults after submission ***
function setBackToDefaults() {
  formInput.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
  console.log("setback to defaults.");
}
// clearing all items
function clearLists() {
  const items = document.querySelectorAll(".grocery-app__list-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  displayMessage("Empty List", "danger");
  listContainer.classList.remove("output--show");
  setBackToDefaults();
}
// *** adding to local storage ***
function addToLocalStorage(id, value) {
  console.log("added to the local storage");
}
function editLocalStorage(id, value) {
  console.log("edited to local storage");
}
function deleteFromLocalStorage(id) {
  console.log("delete from local storage");
}
