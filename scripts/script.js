// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show scroll button when reaching the end of the page
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});