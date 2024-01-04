const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageArea = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const storedObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {};
emailInput.value = storedObj['email'] ?? '';
messageArea.value = storedObj['message'] ?? '';

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
});

form.addEventListener('input', event => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      email: emailInput.value.trim(),
      message: messageArea.value.trim(),
    })
  );
});
