// -------- LOGOUT--------- //
const form = document.getElementById('signup-btn');

// -------- Submit Event Listener
form.addEventListener('click', handleSignupSubmit);

// -------- Handle submit
function handleSignupSubmit(event) {
    localStorage.clear();
    window.location = '/signup'
}