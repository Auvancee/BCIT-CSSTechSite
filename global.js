// [1] Burger Menu Toggle (Only Mobile)
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#hamburger-menu");
    const overlay = document.querySelector("#menuOverlay");
    const menuLinks = document.querySelectorAll(".overlay-content a");
  
    // [1.1] Overlay Activation (w/ Burger Menu)
    menuIcon.addEventListener("click", function () {
        overlay.classList.toggle("active");
    });
  
    // [1.2]  Reversing Overlay & Burger Animations
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            overlay.classList.remove("active"); // Hides overlay when one of the link is clicked
            menuIcon.classList.toggle("active") // Simultaneously, the hamburger animation goes back to its original state
        });
    });
});