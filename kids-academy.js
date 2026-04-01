document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.k-card');

    // Smooth Staggered Reveal
    const observer = new IntersectionObserver((entries) => {
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
        card.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        observer.observe(card);
    });

    // Bubbles Animation Effect (Optional Premium Touch)
    const createBubble = () => {
        const bubble = document.createElement('div');
        bubble.style.position = 'fixed';
        bubble.style.bottom = '-10px';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.width = '10px';
        bubble.style.height = '10px';
        bubble.style.background = 'rgba(197, 160, 89, 0.2)';
        bubble.style.borderRadius = '50%';
        bubble.style.zIndex = '1';
        bubble.style.pointerEvents = 'none';
        bubble.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(bubble);
        setTimeout(() => bubble.remove(), 5000);
    };

    // Add CSS for animation via JS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatUp {
            to { transform: translateY(-100vh) scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    setInterval(createBubble, 1000);
});