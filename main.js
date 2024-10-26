let burgerBtn = document.querySelector("burger-btn");
let burgerMenu = document.querySelector("burger-menu");

let isBurgerOpen = false;

burgerBtn.onClick = () => {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 30px, center";
        isBurgerOpen = true;
    }

    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 30px";
        isBurgerOpen = false;
    }
}
