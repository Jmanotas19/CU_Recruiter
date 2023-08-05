document.querySelector(".hamburger-btn").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".main-nav").classList.toggle("active");
});
