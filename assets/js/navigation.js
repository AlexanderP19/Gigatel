document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".navLink nav ul li a");
    const currentURL = window.location.href;

    links.forEach(link => {
        const linkURL = link.href;

        // Si la URL actual contiene el href del link
        if (currentURL === linkURL) {
            link.classList.add("active");
        }

        // Caso especial: Home sin index.html visible
        if (window.location.pathname === "/" && link.getAttribute("href") === "index.html") {
            link.classList.add("active");
        }
    });

});

