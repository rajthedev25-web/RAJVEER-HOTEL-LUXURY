document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.g-card');

    // Smooth Staggered Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 120);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 1s cubic-bezier(0.2, 0.6, 0.2, 1)";
        observer.observe(card);
    });

    // Parallax effect for Hero Image
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.green-hero');
        let scrollPos = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPos * 0.4 + 'px';
    });
});