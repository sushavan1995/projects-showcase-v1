const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".button");
const tabContent = document.querySelectorAll(".tab__content");
console.log(tabContent);

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if(id) {
        //remove active from all buttons
        buttons.forEach(function(button) {
            button.classList.remove("active");
            e.target.classList.add("active");
        });
        tabContent.forEach(function(content){
            content.classList.remove("active");
        });
        const contentItem = document.getElementById(id);
        contentItem.classList.add("active");
    }   
})