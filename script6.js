const revealSuites = () => {
    const suites = document.querySelectorAll('.suite-feature');
    
    suites.forEach(suite => {
        const suiteTop = suite.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (suiteTop < windowHeight - 150) {
            suite.style.opacity = "1";
            suite.style.transform = "translateY(0)";
        }
    });
};

// Set initial state
document.querySelectorAll('.suite-feature').forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(50px)";
    s.style.transition = "all 1s ease-out";
});

window.addEventListener('scroll', revealSuites);
window.addEventListener('load', revealSuites);