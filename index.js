const newsletterForm = document.querySelector('#newsletter form');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thanks for subscribing!');
});
