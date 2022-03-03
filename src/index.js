import "../src/style.css";

import Logo from "../src/logo.png";
import DropDownIcon from "../src/dropdown-icon.png";
import HamburgerMenu from "../src/hamburgermenu.png";
import HamburgerClose from "../src/hamburgerclose.png";

import LeftArrow from "../src/left-arrow.png"
import RightArrow from "../src/right-arrow.png"


const DOMLogo = document.querySelector(".navlogo");
DOMLogo.src = Logo;
const DOMDropdownIconArray = [...document.querySelectorAll(".dropdown-icon")];
DOMDropdownIconArray.forEach(icon => icon.src = DropDownIcon)
const DOMHamburgerMenu = document.querySelector(".hamburgeropenbtn");
DOMHamburgerMenu.src = HamburgerMenu;
const DOMHamburgerClose = document.querySelector(".hamburgerclosebtn");
DOMHamburgerClose.src = HamburgerClose;

const DOMPreviousSlide = document.querySelector(".left-arrow");
DOMPreviousSlide.src = LeftArrow;
const DOMNextSlide = document.querySelector(".right-arrow");
DOMNextSlide.src = RightArrow;


//navigation
(function() {
    const navSubmenuLink = [
        ...document.querySelectorAll(".navitem.navitem-submenu.navlink"),
    ];

    navSubmenuLink.forEach((submenu) => {
        submenu.addEventListener("click", () => {
            let submenuList = submenu.querySelector("ul.submenu");
            if (submenuList.getAttribute("class").includes("hovered")) {
                return (
                    (submenuList.style.display = "none"),
                    submenuList.classList.remove("hovered")
                );
            }

            if (!submenuList.getAttribute("class").includes("hovered")) {
                submenuList.style.display = "block";
                submenuList.classList.add("hovered");
                window.addEventListener("click", (e) => {
                    if (!submenu.innerText.includes(e.path[0].innerText)) {
                        submenuList.style.display = "none";
                        submenuList.classList.remove("hovered");
                    }
                });
            }
        });
    });

    const navCloseBtn = document.querySelector(".hamburgerclosebtn");
    const navOpenBtn = document.querySelector(".hamburgeropenbtn");
    const mobileNavigation = document.querySelector(".navlist");
    navOpenBtn.addEventListener("click", () => {
        mobileNavigation.style.display = "block";
    });

    navCloseBtn.addEventListener("click", () => {
        mobileNavigation.style.display = "none";
    });
})();

//slider
const sliderComponent = (function() {
    const slides = [...document.querySelectorAll(".slide")];

    function goToNextSlide() {
        slides[slides.length - 1].style.marginLeft = "0";
        slides[0].style.zIndex = "3";
        let currentSlide = slides[0];
        slides[0].style.marginLeft = "100vw";
        slides[1].style.zIndex = "2";
        slides[1].classList.remove("next");
        setTimeout(function() {
            slides.shift();
            slides[0].style.zIndex = "3";
            slides[0].classList.add("current");
            slides[1].style.zIndex = "2";
            slides[1].classList.add("next");
            currentSlide.classList.remove("current");
            currentSlide.classList.add("previous");
            slides[slides.length - 1].classList.remove("previous");
            slides.push(currentSlide);
            slides[slides.length - 1].style.zIndex = 0;
        }, 1000);
    }

    function goToPreviousSlide() {
        slides[0].style.zIndex = "4";
        slides[slides.length - 1].style.zIndex = "3";
        let currentSlide = slides[slides.length - 1];
        currentSlide.classList.add("current");
        currentSlide.classList.remove("previous");
        currentSlide.style.zIndex = "2";
        slides[1].classList.remove("next");
        slides[0].style.marginLeft = "-100vw";
        slides.pop();
        setTimeout(function() {
            slides.unshift(currentSlide);
            slides[1].style.zIndex = "0";
            slides[1].classList.add("next");
            slides[1].classList.remove("current");
            slides[slides.length - 1].classList.add("previous");
            slides[slides.length - 1].style.marginLeft = "0";
        }, 1000);
    }
    return { goToNextSlide, goToPreviousSlide };
})();

// slider loop
(function loopSlides() {
    setInterval(function() {
        sliderComponent.goToNextSlide();
    }, 5000);
})();