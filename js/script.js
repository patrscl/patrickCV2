document.addEventListener("DOMContentLoaded", function() {

    // Dark mode toggle
    const btn = document.getElementById("themeToggle");
    btn.addEventListener("click", function() {
        document.body.classList.toggle("light");
    });

    // Reveal animations
    const reveals = document.querySelectorAll(".reveal");
    function revealOnScroll() {
        reveals.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 80){
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


});
