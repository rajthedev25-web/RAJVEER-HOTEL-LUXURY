document.addEventListener('DOMContentLoaded', () => {
    const consultForm = document.getElementById('consultForm');
    const bookingBox = document.getElementById('booking-box');
    const successState = document.getElementById('successState');
    const userNameSpan = document.getElementById('userName');

    // Form Submission Logic
    consultForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Page refresh rokne ke liye

        // User ka naam nikalna
        const nameInput = document.getElementById('clientName').value;
        const selectedService = document.getElementById('serviceType').value;

        // Validation (Bina naam ke submit nahi hoga)
        if (nameInput.trim() !== "") {
            
            // Console me data dikhane ke liye
            console.log(`Booking for: ${nameInput}`);
            console.log(`Service: ${selectedService}`);

            // UI change karna
            bookingBox.classList.add('hidden');
            userNameSpan.textContent = nameInput;
            successState.classList.remove('hidden');
        }
    });
});