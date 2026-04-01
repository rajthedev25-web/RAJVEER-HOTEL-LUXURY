document.getElementById('spaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success modal
    const modal = document.getElementById('spaModal');
    modal.style.display = 'flex';
    
    this.reset();
});