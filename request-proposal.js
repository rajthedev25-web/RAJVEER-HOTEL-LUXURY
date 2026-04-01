document.getElementById('proposalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide Scroll and Show Success
    document.body.style.overflow = 'hidden';
    const successPop = document.getElementById('successPop');
    successPop.style.display = 'flex';
    
    // Form Clear
    this.reset();
});