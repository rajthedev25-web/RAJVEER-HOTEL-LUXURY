document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const heroText = document.querySelector('.hero-text');

    // 1. Hero Text Fade-in Animation
    // Page load hote hi text smoothly upar aayega
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    heroText.style.transition = 'all 1.5s ease-out';

    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 200);

    // 2. Scroll Reveal for Gallery
    // Jaise-jaise user scroll karega, images load hongi
    const observerOptions = {
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                scrollObserver.unobserve(entry.target); // Ek baar load hone ke baad stop
            }
        });
    }, observerOptions);

    gridItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        scrollObserver.observe(item);
    });

    // 3. Image Click "Zoom" Effect (Simple Lightbox)
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            console.log("Viewing image: " + imgSrc);
            // Yahan aap ek modal (popup) bhi open kar sakte hain
        });
    });
});