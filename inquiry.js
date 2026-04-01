document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide form and show success
    const thankYou = document.getElementById('thankYou');
    thankYou.style.display = 'flex';
    thankYou.style.animation = 'fadeIn 1s ease forwards';
    
    this.reset();
});

// Animation Keyframe through JS
const style = document.createElement('style');
style.innerHTML = `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`;
document.head.appendChild(style);