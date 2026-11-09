const main = document.querySelector(".main");
const burgerBtn = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
    main.classList.toggle("hide")
    burgerBtn.classList.toggle("active")
})