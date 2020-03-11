const form = document.getElementById('logout');

// -------- SUBMIT EVENT LISTENER
form.addEventListener('submit', handleLogoutSubmit);

// -------- HANDLE SUBMIT
function handleLogoutSubmit(event) {
    localStorage.clear();
    window.location = '/index'
}