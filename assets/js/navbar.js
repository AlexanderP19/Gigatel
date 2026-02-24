const openBtn = document.querySelector('.menu-bars-open');
const aside = document.querySelector('aside');
const links = document.querySelectorAll('.navLink-mobile a');

openBtn.addEventListener('click', () => {
    aside.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        aside.classList.remove('active');
    });
});
/*closeBtn.addEventListener('click', () => {
    aside.classList.remove('active');
});*/