function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleTheme() {
    const icons = document.querySelectorAll(".icon");
    icons.forEach(function (icon) {
        original_src = icon.src;
        if (original_src.includes("light")) {
            icon.src = original_src.replace("light", "dark");
        } else if (original_src.includes("dark")) {
            icon.src = original_src.replace("dark", "light");
        }
    });
    const body = document.querySelector("body");
    body.classList.toggle("dark");
}