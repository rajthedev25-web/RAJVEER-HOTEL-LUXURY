document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.w-img');
    
    const reveal = () => {
        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if(imgTop < window.innerHeight - 50) {
                img.style.opacity = "1";
                img.style.transform = "translateY(0)";
            }
        });
    };

    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "translateY(30px)";
        img.style.transition = "all 0.8s ease-out";
    });

    window.addEventListener('scroll', reveal);
    reveal(); 
});