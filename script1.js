document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.welcome-content');
    const enterBtn = document.querySelector('.btn-primary');

    // 1. Smooth Fade-in Effect on Load
    content.style.opacity = '0';
    content.style.transition = 'opacity 2s ease-out, transform 1.5s ease-out';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 100);

    // 2. Button Click Animation
    // This creates a "Fade Out" effect before moving to the next page
    enterBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the link from jumping immediately
        const targetUrl = enterBtn.getAttribute('href');

        // Darken the screen
        document.body.style.transition = 'background-color 0.8s ease';
        document.body.style.backgroundColor = '#000';
        content.style.opacity = '0';

        // Redirect after the animation finishes
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 800);
    });
});