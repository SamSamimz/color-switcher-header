///select all elements

var colorBtn = document.querySelector("#clr");
var colorBox = document.querySelector(".color-box");
var arrBtn = document.querySelector("#arr");
var selectColor = document.querySelectorAll(".btn-box .btn");
var navbar = document.querySelector(".navbar");
var beauty = document.querySelector(".beauty-text");
var btn = document.querySelector(".content .btn");
var dark = document.querySelector("#dark");
var innerBody = document.querySelector("header");
//////////////////////changing procedure
colorBtn.addEventListener("click", () => {
    colorBox.classList.toggle("show-box");
    arrBtn.classList.toggle("arr");
})

dark.addEventListener("click", () => {
    dark.classList.toggle("fa-sun");
    innerBody.classList.toggle("dark-header");
})

for (color of selectColor) {
    color.addEventListener("click", (e) => {
        let item = e.target;
        item.classList.toggle("selected-color");
        navbar.style.background = item.value;
        beauty.style.color = item.value;
        btn.style.background = item.value;
    })
}