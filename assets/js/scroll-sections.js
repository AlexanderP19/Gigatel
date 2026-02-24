document.addEventListener("DOMContentLoaded", () => {

    const homeLink = document.querySelector('a[href="index.html"]');
    const planesLink = document.querySelector('a[href="#tipodeplanes"]');
    const planesSection = document.querySelector("#tipodeplanes");

    if (!planesSection) return;

    window.addEventListener("scroll", () => {

        const rect = planesSection.getBoundingClientRect();
        const headerHeight = document.querySelector("header").offsetHeight;

        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            homeLink.classList.add("active");
            planesLink.classList.add("active");
        } else {
            planesLink.classList.remove("active");
        }

    });

});