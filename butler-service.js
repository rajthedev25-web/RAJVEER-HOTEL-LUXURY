document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.b-card');

    // Reveal on Scroll Effect
    const butlerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s ease-out";
        butlerObserver.observe(card);
    });

    // Subtle navbar interaction
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.style.background = window.scrollY > 100 ? "rgba(10, 25, 41, 0.95)" : "transparent";
        nav.style.transition = "0.5s";
    });
});