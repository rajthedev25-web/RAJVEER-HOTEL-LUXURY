// Hover Animation for Gallery
document.querySelectorAll('.img-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = "0 10px 30px rgba(197, 160, 89, 0.4)";
    });
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = "none";
    });
});

// Smooth Scroll Reveal
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('.event-section').forEach(section => {
    section.style.opacity = "0";
    section.style.transition = "opacity 1.5s ease";
    observer.observe(section);
});

// Adding reveal class in JS for better control
document.styleSheets[0].insertRule('.reveal { opacity: 1 !important; }', 0);