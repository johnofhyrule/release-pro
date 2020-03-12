/* --------- PROFILE FORM -------- */
// --------- APP STATE --------- //
let release = '';

// --------- Render release
function renderRelease(dataObj) {
    const build = document.getElementById('build');
    build.value = `${dataObj.data.build}`;
    
    const os = document.getElementById('os');
    os.value = `${dataObj.data.os}`;

    const version = document.getElementById('version');
    version.value = `${dataObj.data.version}`;

    const manager = document.getElementById('manager');
    manager.value = `${dataObj.data.manager}`;

    const experiments = document.getElementById('experiments');
    experiments.value = dataObj.data.experiments == undefined ? "" : `${dataObj.data.experiments}`;
    
    const notes = document.getElementById('notes');
    notes.value = `${dataObj.data.notes}`;

    const incidents = document.getElementById('incidents');
    incidents.value = dataObj.data.projects == undefined ? "" : `${dataObj.data.incidents}`;

    const postmortem = document.getElementById('postmortem');
    postmortem.value = dataObj.data.projects == undefined ? "" : `${dataObj.data.postmortem}`;
};

// -------- EDIT RELEASE --------- //
const form = document.getElementById('releaseForm');

// -------- SUBMIT EVENT LISTENER
form.addEventListener('submit', handleReleaseSubmit);

// -------- HANDLE SUBMIT
function handleReleaseSubmit(event) {
    let formIsValid = true;
    event.preventDefault();

    const build = document.getElementById('build').value;
    const os = document.getElementById('os').value;
    const version = document.getElementById('version').value;
    const manager = document.getElementById('manager').value;
    const experiments = document.getElementById('experiments').value;
    const notes = document.getElementById('notes').value;
    const incidents = document.getElementById('incidents').value;
    const postmortem = document.getElementById('postmortem').value;

    const releaseData = {
        build: build,
        os: os,
        version: version,
        manager: manager,
        experiments: experiments,
        notes: notes,
        incidents: incidents,
        postmortem: postmortem,
    }

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
                Please enter ${input.placeholder}
                </div>
            `)
        }

        if (formIsValid) {
            releaseData[input.name] = input.value;
        }
    });

    if (formIsValid) {
        // console.log(releaseData)
        // SUBMIT DATA TO SERVER
        fetch('/api/v1/release', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(releaseData),
            })
            .then((dataStream) => dataStream.json())
            .then((dataObj) => {
                window.location = '/release'
            })
            .catch((error) => console.log(error));
    }
}