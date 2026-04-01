document.addEventListener('DOMContentLoaded', () => {
    const wineImgs = document.querySelectorAll('.wine-img');
    
    // Smooth Scroll Reveal
    const revealWine = () => {
        wineImgs.forEach((img, index) => {
            const rect = img.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                setTimeout(() => {
                    img.style.opacity = "1";
                    img.style.transform = "translateY(0)";
                }, index * 100);
            }
        });
    };

    // Initial State
    wineImgs.forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "translateY(40px)";
        img.style.transition = "all 0.8s cubic-bezier(0.2, 0.5, 0.2, 1)";
    });

    window.addEventListener('scroll', revealWine);
    revealWine(); // Trigger once on load
});