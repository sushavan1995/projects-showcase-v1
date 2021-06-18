const items = document.querySelectorAll(".carousel__item");
const prevBtn = document.querySelector(".carousel__button--prev");
const nextBtn = document.querySelector(".carousel__button--next");

//align all carouesls items side by side
items.forEach(function (item, index) {
  item.style.left = `${index * 100}%`;
});

//adding events
let counter = 0;

nextBtn.addEventListener("click", function () {
  console.log(counter);
  counter++;
  carouselSlide();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carouselSlide();
});

function carouselSlide() {
  // looping - setup 1
  if (counter == items.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = items.length - 1;
  }

  /* working with buttons - setup 2
  if (counter === items.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  */
  // added two setups - comment out as per your choice
  items.forEach(function (item) {
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
}
//prevBtn.style.display = "none";
