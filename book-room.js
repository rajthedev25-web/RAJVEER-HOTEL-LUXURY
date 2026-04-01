document.addEventListener('DOMContentLoaded', () => {
    // Set Today as Min Date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin').setAttribute('min', today);
    document.getElementById('checkout').setAttribute('min', today);

    // Form Handle
    const form = document.getElementById('roomForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('successOverlay').style.display = 'flex';
        form.reset();
    });
});