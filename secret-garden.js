document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.g-card');

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
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(card);
    });

    // Floating Leaf Effect (Subtle Magic)
    const createLeaf = () => {
        const leaf = document.createElement('div');
        leaf.innerHTML = '🍃';
        leaf.style.position = 'fixed';
        leaf.style.top = '-50px';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.fontSize = Math.random() * 10 + 10 + 'px';
        leaf.style.opacity = Math.random() * 0.5;
        leaf.style.zIndex = '1';
        leaf.style.pointerEvents = 'none';
        leaf.style.animation = `fall ${Math.random() * 5 + 5}s linear forwards`;
        
        document.body.appendChild(leaf);
        setTimeout(() => leaf.remove(), 10000);
    };

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to { transform: translateY(110vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    setInterval(createLeaf, 2000);
});