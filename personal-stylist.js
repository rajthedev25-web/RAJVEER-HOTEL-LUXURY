document.addEventListener('DOMContentLoaded', () => {
    const fCards = document.querySelectorAll('.f-card');

    // Reveal on Scroll logic
    const fashionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    fCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = "all 1s ease-out";
        fashionObserver.observe(card);
    });

    // Subtle Flash Effect on Scroll (Like Paparazzi)
    window.addEventListener('scroll', () => {
        if(Math.random() > 0.98) { // Random chance to flash
            document.body.style.backgroundColor = "rgba(255,255,255,0.05)";
            setTimeout(() => {
                document.body.style.backgroundColor = "";
            }, 50);
        }
    });
});