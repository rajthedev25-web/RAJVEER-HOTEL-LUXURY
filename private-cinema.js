document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.c-card');

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 1s cubic-bezier(0.2, 0.6, 0.2, 1)";
        observer.observe(card);
    });

    // Darken Navbar on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0,0,0,0.9)";
            nav.style.padding = "15px 8%";
        } else {
            nav.style.background = "transparent";
            nav.style.padding = "30px 8%";
        }
        nav.style.transition = "0.4s";
    });
});