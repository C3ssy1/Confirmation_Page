const params = new URLSearchParams(window.location.search);
const status = params.get('status');
const message = params.get('message');
const errorDescription = params.get('error_description');

const titleEl = document.getElementById('confirmationTitle');
const messageEl = document.getElementById('confirmationMessage');
const linkEl = document.getElementById('confirmationLink');

const decodedMessage = message ? decodeURIComponent(message) : null;
const errorMessage = errorDescription ? decodeURIComponent(errorDescription) : null;

if (errorMessage) {
    titleEl.textContent = 'Confirmation failed';
    messageEl.textContent = errorMessage;
    linkEl.textContent = 'Return to sign in';
    linkEl.href = 'index.html';
} else if (status === 'signup' || status === 'recovery') {
    titleEl.textContent = 'Email confirmed';
    messageEl.textContent = decodedMessage || 'Your email has been confirmed. You can now sign in.';
    linkEl.textContent = 'Sign in now';
    linkEl.href = 'index.html';
} else {
    titleEl.textContent = 'Email confirmation page';
    messageEl.textContent = decodedMessage || 'If you followed a confirmation link from your email, this page will show the result here.';
    linkEl.textContent = 'Return to sign in';
    linkEl.href = 'index.html';
}
