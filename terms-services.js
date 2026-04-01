document.querySelectorAll('.policy-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;

        // Close other items (Optional: if you want only one open at a time)
        document.querySelectorAll('.policy-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});