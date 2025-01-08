const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-btn');
const emailResponse = document.querySelector('.email-response');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailResponse.textContent = 'Whoops! It looks like you forgot to add your email';
  } else {
    emailResponse.textContent = '';
  }

  console.log('button clicked, email value:', emailValue);
});

