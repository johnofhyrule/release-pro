/* --------- NAVBAR ---------*/
// --------- BOOTSRAP JS SWITCH TABS --------- //
$('#pills-tab a').on('click', function (e) {
    e.preventDefault()
    console.log('trigger!!', $(this).tab('show'))
    $(this).tab('show')
})

// -------- LOGOUT--------- //
const logout = document.getElementById('logout');

// -------- Submit event listener
logout.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('api/v1/logout', {
        method: 'DELETE',
    })
        .then((dataStream) => dataStream.json())
        .then((data) => window.location = '/')
        .catch((error) => console.log(error))
});

// -------- ADD RELEASE --------- //
const releaseButtonForm = document.getElementById('release-btn');

// -------- Submit event listener
releaseButtonForm.addEventListener('click', handleAddReleaseSubmit);

// -------- Handle submit
function handleAddReleaseSubmit(event) {
    localStorage.clear();
    window.location = '/addrelease'
}

/* --------- RELEASE TAB -------- */
let release = "";

// --------- GRAB RELEASE --------- //
function getRelease() {
    fetch('api/v1/release', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'credentials': 'include',
        },
    })
    .then((dataStream) => dataStream.json())
    .then((dataObj) => {
        renderRelease(dataObj)
    })
    .catch((error) => console.log(error));
};

getRelease();

// -------- Render release
function renderRelease(dataObj) {
    const type = document.getElementById('type');
    type.innerHTML = "";
    type.innerHTML = `${dataObj.data.type}`;

    const os = document.getElementById('os');
    os.innerHTML = "";
    os.innerHTML = `${dataObj.data.os}`;

    const version = document.getElementById('version');
    version.innerHTML = "";
    version.innerHTML = `${dataObj.data.version}`;

    const manager = document.getElementById('manager');
    manager.innerHTML = "";
    manager.innerHTML = `${dataObj.data.manager}`;

    const experiments = document.getElementById('experiments');
    experiments.innerHTML = "";
    experiments.innerHTML = `${dataObj.data.experiments}`;
    
    const notes = document.getElementById('notes');
    notes.innerHTML = "";
    notes.innerHTML = `${dataObj.data.notes}`;
    
    const incidents = document.getElementById('incidents');
    incidents.innerHTML = `${dataObj.data.incidents}`;
    
    const postmortem = document.getElementById('postmortem');
    postmortem.innerHTML = `${dataObj.data.postmortem}`;
};

// -------- EDIT RELEASE --------- //
const editReleaseForm = document.getElementById('edit-release-btn');

// -------- Submit event listener
editReleaseForm.addEventListener('click', handleEditReleaseSubmit);

// -------- Handle submit
function handleEditReleaseSubmit(event) {
    localStorage.clear();
    window.location = '/editrelease'
}

/* --------- HANDSONTABLE JS SPREADSHEET DATA TAB -------- */
// -------- HARD CODED DATA --------- //
var data = [
    ['Teams & Features', 'Slack Channel', 'Engineering Manager', 'Product Manager', 'Tech Lead', 'iOS Dev', 'Android Dev', 'QE', 'Product Spec', 'Tech Spec', 'Testing Spec', 'Main Pull Requests'],
    [],
    ['RIDER',],
    ['Onboarding', '#pax-onboarding', 'Marco', 'Eric', 'Kenneth', 'Jason', 'Ryan'],
    ['Request', '#request', 'Jonathan', 'Kenny', 'Jill', 'Shawn', 'Andy'],
    ['Payment', '#payment', 'Isha', 'Ivan', 'Slava', 'Tori', 'Thomas'],
    [],
    ['DRIVER',],
    ['Onboarding', '#drv-onboarding', 'Dalton', 'Gustav', 'Shelly', 'Sai', 'Billy'],
    ['Ride', '#ride', 'Helen', 'Jared', 'Ben', 'Steve', 'Grace'],
    ['Payout', '#payout', 'Chris', 'Pete', 'Dolly', 'Steph', 'Brady'],
];

var example1 = document.getElementById('example1');
var hot = new Handsontable(example1, {
    data: data,
    colHeaders: true,
    rowHeaders: true,
    preventOverflow: 'horizontal',
    filters: true,
    dropdownMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
});

/* --------- PROFILE TAB -------- */
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
        renderProfile(dataObj)
    })
    .catch((error) => console.log(error));
};

getUser();

// --------- Render profile
function renderProfile(dataObj) {
    const name = document.getElementById('first-name');
    name.innerHTML = "";
    name.innerHTML = `${dataObj.data.firstName}`;
    
    const lastname = document.getElementById('last-name');
    lastname.innerHTML = "";
    lastname.innerHTML = `${dataObj.data.lastName}`;

    const email = document.getElementById('email');
    email.innerHTML = "";
    email.innerHTML = `${dataObj.data.email}`;

    const slack = document.getElementById('slack');
    slack.innerHTML = `${dataObj.data.slack}`;

    const role = document.getElementById('role');
    role.innerHTML = `${dataObj.data.role}`;

    const teams = document.getElementById('teams');
    teams.innerHTML = `${dataObj.data.teams}`;

    const projects = document.getElementById('projects');
    projects.innerHTML = `${dataObj.data.projects}`;
};

// -------- EDIT PROFILE --------- //
const editProfileForm = document.getElementById('edit-btn');

// -------- Submit event listener
editProfileForm.addEventListener('click', handleEditProfileSubmit);

// -------- Handle submit
function handleEditProfileSubmit(event) {
    localStorage.clear();
    window.location = '/editprofile'
}