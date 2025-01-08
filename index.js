const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-btn');
const emailResponse = document.querySelector('.email-response');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailResponse.textContent = 'Whoops! It looks like you forgot to add your email';
  } else if (!emailPattern.test(emailValue)) {
    emailResponse.textContent = 'Please provide a valid email address';
  } else {
    emailResponse.textContent = '';
  }
});

