const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-btn');
const emailResponse = document.querySelector('.email-response');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailResponse.textContent = 'Whoops! It looks like you forgot to add your email';
    emailInput.style.outline = '0.1rem solid hsl(354, 100%, 66%)';
  } else if (!emailPattern.test(emailValue)) {
    emailResponse.textContent = 'Please provide a valid email address';
    emailInput.style.outline = '0.1rem solid hsl(354, 100%, 66%)';
  } else {
    emailResponse.textContent = '';
    emailInput.style.outline = '0.1rem solid hsl(120, 100%, 40%)';
    emailInput.value = '';
  }
});

