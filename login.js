// 1. Background Slider Logic (10 Images)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change image every 5 seconds
setInterval(nextSlide, 5000);

// 2. Form Submission Effect
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.querySelector('.login-btn');
    btn.innerHTML = "VERIFYING IDENTITY...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Welcome Back to Grand Essence. Redirecting to your sanctuary...");
        window.location.href = "home.html";
    }, 2000);
});