const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageArea = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const storedObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {};

emailInput.value = storedObj['email'] ?? null;
messageArea.value = storedObj['message'] ?? null;

form.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    console.log('Email: ', storedObj['email'])
    console.log('Message: ', storedObj['message'])
    form.reset();
})

emailInput.addEventListener('input', event => {
    storedObj['email'] = event.currentTarget.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedObj))
})

messageArea.addEventListener('input', event => {
    storedObj['message'] = event.currentTarget.value.trim()
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedObj))
})