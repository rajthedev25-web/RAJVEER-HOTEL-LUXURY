document.getElementById('hotelContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelectorAll('input')[0].value;
    
    // Luxury Feedback
    const btn = document.querySelector('.btn-submit');
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        alert(`Thank you, ${name}. Our concierge will contact you shortly.`);
        btn.innerText = "Send Message";
        btn.disabled = false;
        this.reset(); // Clear form
    }, 1500);
});