const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const ticketPrice = 500; // Ek seat ka price 500 set kiya hai

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Form Submission
document.getElementById('reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const finalCount = count.innerText;
    const finalTotal = total.innerText;

    if (finalCount > 0) {
        alert(`Reservation Successful!\nSeats: ${finalCount}\nTotal: ${finalTotal}\nCheck your email for confirmation.`);
        window.location.reload();
    } else {
        alert('Please select at least one seat.');
    }
});