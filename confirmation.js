const params = new URLSearchParams(window.location.search);
const status = params.get('status');
const message = params.get('message');
const errorDescription = params.get('error_description');

const titleEl = document.getElementById('confirmationTitle');
const messageEl = document.getElementById('confirmationMessage');

const decodedMessage = message ? decodeURIComponent(message) : '';
const errorMessage = errorDescription ? decodeURIComponent(errorDescription) : '';

if (errorMessage) {
    titleEl.textContent = 'Confirmation failed';
    messageEl.textContent = errorMessage;
} else if (status === 'signup' || status === 'recovery') {
    titleEl.textContent = 'Email confirmed';
    messageEl.textContent = decodedMessage || 'Your email has been confirmed successfully.';
} else {
    titleEl.textContent = 'Email confirmed';
    messageEl.textContent = decodedMessage || 'Your email has been successfully confirmed.';
}
