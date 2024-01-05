const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageArea = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

document.addEventListener("DOMContentLoaded", (event) => {
  const { email, message } = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {};
  emailInput.value = email ?? '';
  messageArea.value = message ?? '';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const item = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  
  if (item.email.length === 0 || item.message.length === 0) {
    return
  }

  console.log(item);
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
