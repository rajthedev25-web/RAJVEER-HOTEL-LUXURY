document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success modal
    const modal = document.getElementById('successModal');
    modal.style.display = 'flex';

    // Clear form
    this.reset();
});

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Set Minimum Date to Today
const dateInput = document.querySelector('input[type="date"]');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);