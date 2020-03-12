/* --------- NAVBAR ---------*/
// -------- LOGOUT--------- //
const logout = document.getElementById('logout-btn');

// -------- Submit event listener
logout.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('api/v1/auth/logout', {
        method: 'DELETE',
    })
        .then((dataStream) => dataStream.json())
        .then((data) => window.location = '/')
        .catch((error) => console.log(error))
});

/* --------- PROFILE FORM -------- */
// --------- APP STATE --------- //
let userProfile = '';

// --------- Grab user profile
function getUser() {
    fetch('api/v1/users/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'credentials': 'include',
        },
    })
    .then((dataStream) => dataStream.json())
    .then((dataObj) => {
        userProfile = dataObj.data
        renderProfile(dataObj)
    })
    .catch((error) => console.log(error));
};

getUser();

// --------- Render profile
function renderProfile(dataObj) {
    const firstname = document.getElementById('firstname');
    firstname.value = `${dataObj.data.firstName}`;
    
    const lastname = document.getElementById('lastname');
    lastname.value = `${dataObj.data.lastName}`;

    const email = document.getElementById('email');
    email.value = `${dataObj.data.email}`;

    const slack = document.getElementById('slack');
    slack.value = dataObj.data.slack == undefined ? "" : `${dataObj.data.slack}`;

    const role = document.getElementById('role');
    role.value = `${dataObj.data.role}`;
    
    const teams = document.getElementById('teams');
    teams.value = dataObj.data.teams == undefined ? "" : `${dataObj.data.teams}`;

    const projects = document.getElementById('projects');
    projects.value = dataObj.data.projects == undefined ? "" : `${dataObj.data.projects}`;
};

// -------- EDIT PROFILE --------- //
const form = document.getElementById('profileForm');

// -------- SUBMIT EVENT LISTENER
form.addEventListener('submit', handleEditSubmit);

// -------- HANDLE SUBMIT
function handleEditSubmit(event) {
    let formIsValid = true;
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const slack = document.getElementById('slack').value;
    const role = document.getElementById('role').value;
    const teams = document.getElementById('teams').value;
    const projects = document.getElementById('projects').value;
    const password = userProfile.password;

    const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        slack: slack,
        role: role,
        teams: teams,
        projects: projects,
        password: password,
    }
console.log(userData)
    // Clear Alert Messages
    document.querySelectorAll('.alert').forEach((alert) => alert.remove());

    const formInputs = [...form.elements];
    formInputs.forEach((input) => {
        input.classList.remove('input-error');
        if (input.type !== 'submit' && input.value === '') {
            formIsValid = false;
            // Add red border to invalid input
            input.classList.add('input-error');
            // Add error message below input
            input.insertAdjacentHTML('afterend', `
                <div class="alert ${input.id}-mesage">
                Please enter your ${input.placeholder}
                </div>
            `)
        } else if (input.type === 'password' && input.value.length < 4) {
            formIsValid = false;
            // Add reborder to invalid input
            input.classList.add('input-error');
            // Add error message below input
            input.insertAdjacentHTML('afterend', `
                <div class="alert ${input.id}-messge">
                Please enter valid password.
                </div>
            `)
        };

        if (formIsValid) {
            userData[input.name] = input.value;
        }
    });

    if (formIsValid) {
        console.log(userData)
        // SUBMIT DATA TO SERVER
        fetch('/api/v1/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            })
            .then((dataStream) => dataStream.json())
            .then((dataObj) => {
                window.location = '/release'
            })
            .catch((error) => console.log(error));
    }
}

/* -------- DELETE USER -------- */
const deleteUser = document.getElementById('delete');

deleteUser.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('api/v1/users', {
        method: 'POST',
    })
        .then((dataStream) => dataStream.json())
        .then((data) => { 

        window.location = '/index';

        console.log(data)
    })
        .catch((error) => console.log(error))
});