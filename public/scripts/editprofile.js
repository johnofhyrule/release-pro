/* --------- PROFILE TAB -------- */
// --------- APP STATE --------- //
let userProfile = '';

// --------- Grab user profile
function getUser() {
    fetch('api/v1/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'credentials': 'include',
        },
    })
    .then((dataStream) => dataStream.json())
    .then((dataObj) => {
        console.log(dataObj)
        renderProfile(dataObj)
    })
    .catch((error) => console.log(error));
};

getUser();

// --------- Render profile
function renderProfile(dataObj) {
    const firstname = document.getElementById('firstName');
    firstname.value = `${dataObj.data.firstName}`;
    
    const lastname = document.getElementById('lastName');
    lastname.value = `${dataObj.data.lastName}`;

    const email = document.getElementById('email');
    email.value = `${dataObj.data.email}`;

    const slack = document.getElementById('slack');
    slack.value = `${dataObj.data.slack}`;

    const role = document.getElementById('role');
    role.value = `${dataObj.data.role}`;

    const projects = document.getElementById('projects');
    projects.value = `${dataObj.data.projects}`;
};

// -------- EDIT PROFILE --------- //
const editProfileForm = document.getElementById('edit-btn');

// -------- Submit event listener
editProfileForm.addEventListener('submit', handleEditProfileSubmit);

// -------- Handle submit
function handleEditProfileSubmit(event) {
    localStorage.clear();
    window.location = '/release'
}

// -------- RELEASE REDIRECT --------- //
const releaseForm = document.getElementById('profile-btn');

// -------- Submit event listener
releaseForm.addEventListener('click', handleReleaseSubmit);

// -------- Handle submit
function handleReleaseSubmit(event) {
    localStorage.clear();
    window.location = '/release'
}