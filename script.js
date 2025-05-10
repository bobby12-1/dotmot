function submitBooking(event) {
  event.preventDefault();

  const bookingData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    room: document.getElementById('room').value,
    guests: document.getElementById('guests').value,
    checkin: document.getElementById('checkin').value,
    checkout: document.getElementById('checkout').value,
  };

  fetch('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData)
  })
    .then(response => response.json())
    .then(data => {
      alert("Booking confirmed! A confirmation email has been sent.");
    })
    .catch(error => {
      console.error('Booking error:', error);
      alert('Error submitting booking.');
    });
}
