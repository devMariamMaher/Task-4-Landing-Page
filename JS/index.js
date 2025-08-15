const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const heroSection = document.querySelector(".hero");
const themeToggle = document.querySelector('.themeToggle');
const heroHeight = heroSection.offsetHeight;

window.addEventListener("scroll", function () {
    if (window.scrollY > heroHeight - 80) {
        navbar.style.display = "block";
        navbar.classList.add("fixed", "shadow-sm", "bg-light");
        navbarBrand.classList.remove("text-white");
        navbarBrand.classList.add("text-primary");
        themeToggle.classList.remove("btn-outline-light");
        themeToggle.classList.add("btn-outline-primary");
    } else {
        navbar.classList.remove("fixed", "shadow-sm", "bg-light");
        navbarBrand.classList.remove("text-primary");
        navbarBrand.classList.add("text-white");
        themeToggle.classList.remove("btn-outline-primary");
        themeToggle.classList.add("btn-outline-light");
    }
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});
