document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress Bar (Top par ek patli gold line dikhegi)
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: #c5a059;
        width: 0%;
        z-index: 1000;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // 2. Smooth Fade-in for Sections
    const sections = document.querySelectorAll('.privacy-section');
    
    const revealOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        revealObserver.observe(section);
    });

    // 3. Log for Privacy Audit (Just for "Elite" feel in Console)
    console.log("%c Grand Essence %c Secure Privacy Module Loaded", 
                "color: #c5a059; font-size: 20px; font-weight: bold;", 
                "color: #718096; font-size: 12px;");
});