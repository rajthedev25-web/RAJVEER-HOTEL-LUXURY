const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-row').forEach(row => {
    row.style.opacity = "0";
    row.style.transform = "translateY(50px)";
    row.style.transition = "all 0.8s ease-out";
    observer.observe(row);
});