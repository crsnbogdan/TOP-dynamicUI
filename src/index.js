import "../src/style.css";

import Logo from "../src/logo.png";
import DropDownIcon from "../src/dropdown-icon.png";
import HamburgerMenu from "../src/hamburgermenu.png";
import HamburgerClose from "../src/hamburgerclose.png";

import LeftArrow from "../src/left-arrow.png";
import RightArrow from "../src/right-arrow.png";

const DOMLogo = document.querySelector(".navlogo");
DOMLogo.src = Logo;
const DOMDropdownIconArray = [...document.querySelectorAll(".dropdown-icon")];
DOMDropdownIconArray.forEach((icon) => (icon.src = DropDownIcon));
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
    let slides = [...document.querySelectorAll(".slide")];
    slides.find((slide) => slide.classList.contains("previous")).style.zIndex =
        "2";
    slides.find((slide) => slide.classList.contains("current")).style.zIndex =
        "4";
    slides.find((slide) => slide.classList.contains("next")).style.zIndex = "3";

    function goToNextSlide() {
        slides = [...document.querySelectorAll(".slide")];
        let previousSlideIndex = slides.findIndex((slide) =>
            slide.classList.contains("previous")
        );
        let currentSlideIndex = slides.findIndex((slide) =>
            slide.classList.contains("current")
        );
        let nextSlideIndex = slides.findIndex((slide) =>
            slide.classList.contains("next")
        );
        slides[currentSlideIndex].style.zIndex = "4";
        slides[nextSlideIndex].style.zIndex = "3";
        slides[previousSlideIndex].style.zIndex = "2";
        slides[nextSlideIndex].classList.replace("next", "current");
        if (nextSlideIndex + 1 > slides.length - 1) {
            slides[0].classList.add("next");
        } else {
            slides[nextSlideIndex + 1].classList.add("next");
        }
        slides[currentSlideIndex].classList.replace("current", "previous");
        slides[previousSlideIndex].classList.remove("previous");
        setTimeout(function() {
            slides[currentSlideIndex].style.marginLeft = "-100vw";
            slides.find((slide) =>
                slide.classList.contains("previous")
            ).style.zIndex = "2";
        }, 250);
        setTimeout(function() {
            slides.find((slide) => slide.classList.contains("next")).style.zIndex =
                "3";
            slides.find((slide) => slide.classList.contains("current")).style.zIndex =
                "4";
            slides.find((slide) =>
                slide.classList.contains("previous")
            ).style.zIndex = "2";
        }, 500);
        setTimeout(function() {
            slides[currentSlideIndex].style.marginLeft = "0";
        }, 750);
    }

    function goToPreviousSlide() {
        slides = [...document.querySelectorAll(".slide")];
        let previousSlideIndex = slides.findIndex((slide) =>
            slide.classList.contains("previous")
        );
        let currentSlideIndex = slides.findIndex((slide) =>
            slide.classList.contains("current")
        );
        let nextSlideIndex = slides.findIndex((slide) =>
            slide.classList.contains("next")
        );
        slides[currentSlideIndex].style.zIndex = "5";
        slides[previousSlideIndex].style.zIndex = "4";
        slides[nextSlideIndex].style.zIndex = "2";
        slides[previousSlideIndex].classList.replace("previous", "current");
        slides[currentSlideIndex].classList.replace("current", "next");
        slides[nextSlideIndex].classList.remove("next");
        if (previousSlideIndex === 0) {
            slides[slides.length - 1].classList.add("previous");
        } else {
            slides[previousSlideIndex - 1].classList.add("previous");
        }

        setTimeout(function() {
            slides.find((slide) =>
                slide.classList.contains("next")
            ).style.marginLeft = "100vw";
        }, 250);
        setTimeout(function() {
            slides.find((slide) => slide.classList.contains("next")).style.zIndex =
                "3";
            slides.find((slide) => slide.classList.contains("current")).style.zIndex =
                "4";
            slides.find((slide) =>
                slide.classList.contains("previous")
            ).style.zIndex = "2";
        }, 500);
        setTimeout(function() {
            slides.find((slide) =>
                slide.classList.contains("next")
            ).style.marginLeft = "0";
        }, 750);
    }
    const DOMNextSlideButton = document.querySelector(".next-slide");
    const DOMPreviousSlideButton = document.querySelector(".previous-slide");
    DOMNextSlideButton.addEventListener("click", () => goToNextSlide());
    DOMPreviousSlideButton.addEventListener("click", () => goToPreviousSlide());
    return { goToNextSlide }
})();
(function loopSlides() {
    let x = 0;
    setInterval(function() {
        if (x === 0) {
            sliderComponent.goToNextSlide();
        }
    }, 5000)
})();