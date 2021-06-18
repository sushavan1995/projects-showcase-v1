/*
const menu = [
  {
    id: 1,
    title: "Food 1",
    category: "dining",
    image: "./images/food1.jpg",
    price: "20.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 2,
    title: "Food 2",
    category: "dining",
    image: "./images/food2.jpg",
    price: "30.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 3,
    title: "Food 3",
    category: "dining",
    image: "./images/food3.jpg",
    price: "30.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 4,
    title: "Drink 1",
    category: "drink",
    image: "./images/drink1.jpg",
    price: "25.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 5,
    title: "Food 4",
    category: "dining",
    image: "./images/food4.jpg",
    price: "28.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 6,
    title: "Drink 2",
    category: "drink",
    image: "./images/drink2.jpg",
    price: "20.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 7,
    title: "Drink 3",
    category: "drink",
    image: "./images/drink3.jpg",
    price: "20.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
];

//selecting elements
const menuContainer = document.querySelector(".menu-container .row");

// load windows and display all menu
window.addEventListener("DOMContentLoaded", function () {
  // displaying all menu items
  displayAllMenu(menu);

  // showing buttons as per category collections
  displayButtons();

  const btns = document.querySelectorAll(".filter-btn");

  //selecting first button and adding active class
  const firstButton = document.querySelector(".filter-btn");
  firstButton.classList.add("active");

  // filter function with button update
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      // buttons update
      if (category) {
        btns.forEach(function (eachBtn) {
          eachBtn.classList.remove("active");
          e.currentTarget.classList.add("active");
        });
      }
      //filtering
      const menuCategory = menu.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });

      if (category === "all") {
        displayAllMenu(menu);
      } else {
        displayAllMenu(menuCategory);
      }
    });
  });
  // filter ends
});

function displayAllMenu(menuItems) {
  let menuAll = menuItems.map(function (item) {
    return `<div class="col-sm-12 col-md-12 col-lg-6 custom--transition">
        <div class="menu-item d-flex mb-5 rounded overflow-hidden">
          <div class="menu-item__image w-75">
            <img src="${item.image}" alt="${item.image}">
          </div>
          <div class="menu-item__info px-2 py-2">
            <div class="menu-item__header">
              <h4 class="menu-item__title text--primary">${item.title}</h4>
              <h4 class="menu-item__price text--price"><span clas="mr-1">Rs.</span>${item.price}</h4>
            </div>
            <div class="menu-item__body">
              <p class="text-muted">
               ${item.text}
              </p>
            </div>
          </div>
        </div>
      </div>
        `;
  });
  menuAll = menuAll.join("");
  menuContainer.innerHTML = menuAll;
}

function displayButtons() {
  // checking buttons for any category update
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoriesBtns = categories.map(function (category) {
    return `<button class="filter-btn text-capitalize" data-id=${category}>${category}</button>`;
  });
  const btnsContainer = document.querySelector(".btns-container");
  btnsContainer.innerHTML = categoriesBtns.join(" ");
}
*/

/* menu filter with multiple category list */
const menu = [
  {
    id: 1,
    title: "Food 1",
    category: ["dining","breakfast", "chinese"],
    image: "./images/food1.jpg",
    price: "20.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 2,
    title: "Food 2",
    category: ["dining","lunch", "french"],
    image: "./images/food2.jpg",
    price: "30.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 3,
    title: "Food 3",
    category: ["dining","dinner", "Indian"],
    image: "./images/food3.jpg",
    price: "30.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  },
  {
    id: 4,
    title: "Drink 1",
    category: ["drink","breakfast", "Indian"],
    image: "./images/drink1.jpg",
    price: "25.00",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, inventore.",
  }
];

//selecting elements
const menuContainer = document.querySelector(".menu-container .row");

// load windows and display all menu
window.addEventListener("DOMContentLoaded", function () {
  // displaying all menu items
  displayAllMenu(menu);

  // showing buttons as per category collections
  displayButtons();

  const btns = document.querySelectorAll(".filter-btn");

  //selecting first button and adding active class
  const firstButton = document.querySelector(".filter-btn");
  firstButton.classList.add("active");

  // filter function with button update
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      // buttons update
      if (category) {
        btns.forEach(function (eachBtn) {
          eachBtn.classList.remove("active");
          e.currentTarget.classList.add("active");
        });
      }
      //filtering
      const menuCategory = [];
      menu.filter(function(item) {
          //console.log(item.category);
          item.category.forEach(function(value){
            if(value === category) {
              menuCategory.push(item);
            }
          })
          /*
          for(let i=0; i<item.category.length; i++) {
            if(item.category[i] === category) {
              menuCategory.push(item);
            }
          }
          */
      });

      console.log(menuCategory);
      if (category === "all") {
        displayAllMenu(menu);
      } else {
        displayAllMenu(menuCategory);
      }
    });
  });
  // filter ends
});

function displayAllMenu(menuItems) {
  let menuAll = menuItems.map(function (item) {
    return `<div class="col-sm-12 col-md-12 col-lg-6 custom--transition">
        <div class="menu-item d-flex flex-wrap mb-5 rounded overflow-hidden">
          <div class="menu-item__image">
            <img src="${item.image}" alt="${item.image}">
          </div>
          <div class="menu-item__info px-2 py-2">
            <div class="menu-item__header">
              <h4 class="menu-item__title text--primary">${item.title}</h4>
              <h4 class="menu-item__price text--price"><span clas="mr-1">Rs.</span>${item.price}</h4>
            </div>
            <div class="menu-item__body">
              <p class="text-muted">
               ${item.text}
              </p>
            </div>
          </div>
        </div>
      </div>
        `;
  });
  menuAll = menuAll.join("");
  menuContainer.innerHTML = menuAll;
}

function displayButtons() {
  // checking buttons for any category update
  const categories = menu.reduce(
    function (values, item) {
      item.category.forEach(function(catValue){
        if (!values.includes(catValue)) {
          values.push(catValue);
        }
      });
      return values;
    },
    ["all"]
  );
  const categoriesBtns = categories.map(function (category) {
    return `<button class="filter-btn mb-2 text-capitalize" data-id=${category}>${category}</button>`;
  });
  const btnsContainer = document.querySelector(".btns-container");
  btnsContainer.innerHTML = categoriesBtns.join(" ");
}
