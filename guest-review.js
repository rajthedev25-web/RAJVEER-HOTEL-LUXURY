document.addEventListener('DOMContentLoaded', () => {
    const writeBtn = document.querySelector('.write-review-btn');
    const cards = document.querySelectorAll('.review-card');

    // 1. Smooth Reveal Animation on Scroll
    const revealReviews = () => {
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 50) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    // Initial styling for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealReviews);
    revealReviews(); // Run on load

    // 2. Write a Review Modal (Simple Alert for now, or you can trigger a Form)
    writeBtn.addEventListener('click', () => {
        // Aap yahan ek proper HTML form bhi dikha sakte hain
        const guestName = prompt("Please enter your name:");
        if (guestName) {
            alert(`Thank you ${guestName}! Our team will verify and publish your review shortly.`);
        }
    });

    // 3. Hover Effect Enhancement
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#c5a059'; // Gold border on hover
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
        });
    });
});