const outputValue = document.querySelector(".output--value");
const incomeTotalValue = document.querySelector(
  ".operation--income .operation--value"
);
const expenseTotalValue = document.querySelector(
  ".operation--expense .operation--value"
);
const appForm = document.querySelector(".form");
const selectOperation = document.querySelector(".form__select--operation");
const inputDescription = document.querySelector(".form__input--description");
const inputValue = document.querySelector(".form__input--value");
const incomeItemsList = document.querySelector(".list__items--income");
const expenseItemsList = document.querySelector(".list__items--expense");
const listTitle = document.querySelectorAll(".list-title");
const incomeItem = document.querySelectorAll(".list__items--income .item");
const expenseItem = document.querySelectorAll(".list__items--expense .item");

//console.log(incomeTotalValue.textContent);
// reset variable
let totalIncome = 0;
let totalExpense = 0;
// *** event ***
appForm.addEventListener("submit", addItem);
document.addEventListener("keypress", function (event) {
  if (event.code === 13) {
    addItem(e);
  }
});
// *** function ***
function addItem(e) {
  e.preventDefault();
  let validationFlag = checkInputs();
  if (validationFlag) {
    if (selectOperation.value === "income") {
      addToIncomeList();
      setToDefaults();
    } else {
      addToExpenseList();
      setToDefaults();
    }
  }
}

// checking inputs if empty
function checkInputs() {
  if (inputDescription.value == " " || inputValue.value == 0) {
    displayMessage("Please check your inputs.", "danger");
    return false;
  } else {
    return true;
  }
}

// adding into income list
function addToIncomeList() {
  //console.log("adding to income list");
  totalIncome += parseInt(inputValue.value);
  const element = document.createElement("li");
  element.classList.add("item");
  element.innerHTML = `
                      <div class="item__title">${inputDescription.value}</div>
                      <div class="item__body d-flex align-items-center">
                        <div class="item__currency text--success">Rs.</div>
                        <div class="item__value text--success">${inputValue.value}</div>
                        <button class="btn item__remove--btn text--danger">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </div>
    `;
  incomeItemsList.appendChild(element);

  // display message
  displayMessage("Item added to the Income List", "success");
  // remove item
  const removeBtnIncome = element.querySelector(
    ".list__items--income .item__remove--btn"
  );
  removeBtnIncome.addEventListener("click", removeItemFromIncome);

  //update total income and final result
  updateTotalIncome(totalIncome);
  updateFinalResult();
}

// adding into expense list
function addToExpenseList() {
  //console.log("adding to expense list");
  totalExpense += parseInt(inputValue.value);
  const element = document.createElement("li");
  element.classList.add("item");
  element.innerHTML = `
  <div class="item__title">${inputDescription.value}</div>
  <div class="item__body d-flex align-items-center">
    <div class="item__currency text--danger">Rs.</div>
    <div class="item__value text--danger">${inputValue.value}</div>
    <button class="btn item__remove--btn text--danger">
      <i class="bi bi-trash-fill"></i>
    </button>
  </div>
    `;
  expenseItemsList.appendChild(element);

  // display message
  displayMessage("Item added to the Expense List", "success");
  // remove item
  const removeBtnExpense = element.querySelector(
    ".list__items--expense .item__remove--btn"
  );
  removeBtnExpense.addEventListener("click", removeItemFromExpense);

  //update total expense and final result
  updateTotalExpense(totalExpense);
  updateFinalResult();
}
// remove item from income list
function removeItemFromIncome(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  let value = e.currentTarget.previousElementSibling.textContent;
  value = parseInt(value);
  incomeItemsList.removeChild(elem);

  displayMessage("Item removed from the Income List", "danger");

  totalIncome = totalIncome - value;
  updateTotalIncome(totalIncome);
  updateFinalResult();
  //console.log(elem);
}

// remove item from income list
function removeItemFromExpense(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  let value = e.currentTarget.previousElementSibling.textContent;
  value = parseInt(value);
  expenseItemsList.removeChild(elem);

  displayMessage("Item removed from the Expense List", "danger");

  totalExpense = totalExpense - value;
  updateTotalExpense(totalExpense);
  updateFinalResult();
}

// update total income value
function updateTotalIncome(totalIncome) {
  incomeTotalValue.textContent = totalIncome;
}

// update total expense value
function updateTotalExpense(totalExpense) {
  expenseTotalValue.textContent = totalExpense;
}

// default setting
function setToDefaults() {
  selectOperation.value = "income";
  inputDescription.value = " ";
  inputValue.value = 0;
}

// function update final result
function updateFinalResult() {
  let result = totalIncome - totalExpense;
  outputValue.textContent = result;
  if (result < 0) {
    outputValue.classList.add("text-danger");
  } else {
    outputValue.classList.remove("text-danger");
  }
}

// display message
function displayMessage(messageText, messageType) {
  const message = document.querySelector(".message");
  message.textContent = messageText;
  messageType = `text--${messageType}`;
  console.log(messageType);
  console.log(typeof messageType);
  message.classList.add(messageType, "message--show");
  setTimeout(function () {
    message.classList.remove("message--show");
    message.classList.remove(messageType);
  }, 4000);
}
