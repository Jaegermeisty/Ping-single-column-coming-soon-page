const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-btn');
const emailResponse = document.querySelector('.email-response');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Button clicked');
});