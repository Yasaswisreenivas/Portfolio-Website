// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuIcon.classList.toggle("bx-x"); // Change to 'X' icon on toggle
});

// Smooth Scrolling
const navLinks = document.querySelectorAll(".navlist a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed header
                behavior: "smooth",
            });
        }
    });
});

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});
