document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const successBox = document.getElementById('successBox');

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Form hide karna aur success dikhana
        eventForm.style.display = 'none';
        successBox.classList.remove('hidden');

        // Console log for demo
        console.log("Enquiry sent successfully!");
    });
});