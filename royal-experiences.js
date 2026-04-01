// Scroll Animation for images
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.exp-image img');
    images.forEach(img => {
        const speed = 0.05;
        const rect = img.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            img.style.transform = `scale(1.1) translateY(${rect.top * speed}px)`;
        }
    });
});