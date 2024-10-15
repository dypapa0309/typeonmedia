document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('promo-popup');
  const closeButton = document.getElementById('close-popup');

  // Show popup immediately after DOM is loaded
  popup.style.display = 'block';

  // Close popup when close button is clicked
  closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});