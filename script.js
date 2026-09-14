
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

const themeToggle = document.getElementById('themeToggle');


form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  clearErrors();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  if (nameValue === '') {
    showError(nameInput, nameError, 'Name is required.');
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    showError(emailInput, emailError, 'Email is required.');
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    isValid = false;
  }

  if (messageValue === '') {
    showError(messageInput, messageError, 'Message cannot be empty.');
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = 'Thanks! Your message has been sent.';
    form.reset();
  }
});

function showError(inputEl, errorEl, text) {
  errorEl.textContent = text;
  inputEl.classList.add('invalid');
}

function clearErrors() {
  [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove('invalid'));
  [nameError, emailError, messageError].forEach((el) => (el.textContent = ''));
  successMsg.textContent = '';
}

// Dark mode/ light mode
themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});
