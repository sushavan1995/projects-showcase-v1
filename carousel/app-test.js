const items = document.querySelectorAll(".carousel__item");
const prevBtn = document.querySelector(".carousel-control--prev-button");
const nextBtn = document.querySelector(".carousel-control--next-button");

//align all carouesls items side by side
items.forEach(function (item, index) {
  item.style.left = `${index * 100}%`;
});

const rules = {
    navigation: true,
    loop: true,
    autoloop: false
}
function carouselSetup(rules) {
    let counter = 0;
    if(rules.autoloop) {
        setInterval(function() {
            counter++;
            if(counter > items.length - 1) {
                counter = 0;
            }
            items.forEach(function (item) {
                item.style.transform = `translateX(-${counter * 100}%)`;
              });
        },3000);
        //setInterval(carouselSlideAuto(counter),4000);
    }
}
carouselSetup(rules);
function carouselSlideAuto(counter) {
    items.forEach(function (item) {
        item.style.transform = `translateX(-${counter * 100}%)`;
      });
}

/*
//adding events
let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carouselSlide(counter);
});
prevBtn.addEventListener("click", function () {
  counter--;
  carouselSlide(counter);
});

function carouselSlide(counter) {
  // looping - setup 1
  if (counter === items.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = items.length - 1;
  }

  // working with buttons - setup 2
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
  // added two setups - comment out as per your choice
}
prevBtn.style.display = "none";
*/
