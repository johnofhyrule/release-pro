/* --------- BOOTSRAP JS SWITCH TABS -------- */
$('#pills-tab a').on('click', function (e) {
    e.preventDefault()
    console.log('trigger!!', $(this).tab('show'))
    $(this).tab('show')
})

/* --------- RELEASE TAB -------- */
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
        renderProfile(dataObj)
    })
    .catch((error) => console.log(error));
};

getRelease();

// Place user information onto profile
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
    incidents.innerHTML = "";
    incidents.innerHTML = `${dataObj.data.incidents}`;
    
    const postmortem = document.getElementById('postmortem');
    postmortem.innerHTML = "";
    postmortem.innerHTML = `${dataObj.data.postmortem}`;
};

/* --------- HANDSONTABLE JS SPREADSHEET DATA TAB -------- */
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
// App state
let userProfile = '';

// Get user information
function getUser() {
    fetch('api/v1/user', {
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

// Place user information onto profile
function renderProfile(dataObj) {
    const name = document.getElementById('name');
    name.innerHTML = "";
    name.innerHTML = `${dataObj.data.firstName} ${dataObj.data.lastName}`;

    const email = document.getElementById('email');
    email.innerHTML = "";
    email.innerHTML = `${dataObj.data.email}`;

    const slack = document.getElementById('slack');
    slack.innerHTML = `${dataObj.data.slack}`;

    const role = document.getElementById('role');
    role.innerHTML = `${dataObj.data.role}`;

    const projects = document.getElementById('projects');
    projects.innerHTML = `${dataObj.data.projects}`;
};