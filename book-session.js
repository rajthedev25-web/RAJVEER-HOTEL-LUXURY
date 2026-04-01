document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Image Switcher
    const images = document.querySelectorAll('.sidebar-gallery img');
    let currentIndex = 0;

    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(nextImage, 4000); // Har 4 second mein photo badlegi

    // 2. Form Submission
    const form = document.getElementById('sessionForm');
    const overlay = document.getElementById('confirmOverlay');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        overlay.style.display = 'flex';
    });
});