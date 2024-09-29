function toggleTheme(theme) {
    const icons = document.querySelectorAll(".icon");
    const html = document.querySelector("html");
    const navBar = document.querySelector(".navbar")
    icons.forEach(function (icon) {
        original_src = icon.src;
        if (theme = "dark") {
            icon.src = original_src.replace("light", "dark");
            html.setAttribute("data-bs-theme", "dark")
            if (navBar.classList.contains("bg-light")) {
                navBar.classList.toggle("bg-light")
                navBar.classList.toggle("bg-dark")    
            }
        } else if (theme = "light") {
            icon.src = original_src.replace("dark", "light");
            html.setAttribute("data-bs-theme", "light")
            if (navBar.classList.contains("bg-dark")) {
                navBar.classList.toggle("bg-light")
                navBar.classList.toggle("bg-dark")    
            }
        }
    })
    console.log("toggle theme")
    return false
}
// toggleTheme()