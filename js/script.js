document.addEventListener("DOMContentLoaded", function() {
    
    const btn = document.getElementById("themeToggle");

    function loadParticles(color) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60 },
                color: { value: color },
                size: { value: 3 },
                line_linked: { enable: true, color: color },
                move: { speed: 1 }
            }
        });
    }

    loadParticles("#00ff88"); 


    btn.addEventListener("click", function() {
        document.body.classList.toggle("light");
    });

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
