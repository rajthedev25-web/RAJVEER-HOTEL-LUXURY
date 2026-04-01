const roomSelect = document.getElementById('roomSelect');
const roomPriceDisp = document.getElementById('roomPrice');
const taxPriceDisp = document.getElementById('taxPrice');
const totalPriceDisp = document.getElementById('totalPrice');

function updatePricing() {
    const price = parseInt(roomSelect.value);
    const tax = price * 0.10;
    const total = price + tax;

    roomPriceDisp.innerText = `$${price.toFixed(2)}`;
    taxPriceDisp.innerText = `$${tax.toFixed(2)}`;
    totalPriceDisp.innerText = `$${total.toFixed(2)}`;
}

// Initial Call
updatePricing();

// Update when user changes room
roomSelect.addEventListener('change', updatePricing);

// Form Submission
document.getElementById('finalBookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Reservation Successful! We have sent a confirmation email to you.");
    window.location.href = "home.html";
});