import './style.css';
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

    const navCloseBtn = document.querySelector('.hamburgerclosebtn');
    const navOpenBtn = document.querySelector('.hamburgeropenbtn');
    const mobileNavigation = document.querySelector('.navlist');
    navOpenBtn.addEventListener('click', () => {
        mobileNavigation.style.display = 'block';
    });


    navCloseBtn.addEventListener('click', () => {
        mobileNavigation.style.display = 'none';
    })

})();