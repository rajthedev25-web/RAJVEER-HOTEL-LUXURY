document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.ball-card');

    // Smooth Staggered Animation
    const ballObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0) scale(1)";
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(100px) scale(0.9)";
        card.style.transition = "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)";
        ballObserver.observe(card);
    });

    // Slow zoom effect on Hero
    const hero = document.querySelector('.ballroom-hero');
    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        hero.style.backgroundSize = (100 + scroll / 20) + "%";
    });
});