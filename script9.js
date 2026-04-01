window.addEventListener('scroll', () => {
    // 1. Hero Parallax Effect
    const hero = document.querySelector('.dining-hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.7 + "px";

    // 2. Menu Reveal Animation
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        const catTop = cat.getBoundingClientRect().top;
        if (catTop < window.innerHeight - 100) {
            cat.style.opacity = "1";
            cat.style.transform = "translateY(0)";
        }
    });
});

// Set initial states for animation
document.querySelectorAll('.menu-category').forEach(cat => {
    cat.style.opacity = "0";
    cat.style.transform = "translateY(40px)";
    cat.style.transition = "all 0.8s ease-out";
});