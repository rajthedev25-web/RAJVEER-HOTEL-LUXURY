// Simple Scroll Reveal Logic
window.addEventListener('scroll', () => {
    const segments = document.querySelectorAll('.lifestyle-segment');
    segments.forEach(seg => {
        const speed = 0.1;
        const rect = seg.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            seg.style.opacity = "1";
            seg.style.transform = "translateY(0)";
        }
    });
});

// Setting initial state for animation
document.querySelectorAll('.lifestyle-segment').forEach(seg => {
    seg.style.opacity = "0";
    seg.style.transform = "translateY(50px)";
    seg.style.transition = "all 1s ease-out";
});