document.getElementById('poolForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success modal
    document.getElementById('poolSuccess').style.display = 'flex';
    
    this.reset();
});

// Set Min Date to Today
const dateInput = document.getElementById('poolDate');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);