const form = document.getElementById('addRelease');

/* -------- Submit Form Event Listener -------- */
form.addEventListener('submit', handleReleaseSbumit);

/* -------- Handle Submit -------- */
function handleReleaseSbumit(event) {
    let formIsValid = true;
    event.preventDefault();

    const build = document.getElementById('build').value;
    const os = document.getElementById('os').value;
    const version = document.getElementById('version').value;
    const releaseManager = document.getElementById('releaseManager').value;
    const experiments = document.getElementById('experiments').value;
    const notes = document.getElementById('notes').value;

    const releaseData = {
        build: build,
        os: os,
        version: version,
        releaseManager: releaseManager,
        experiments: experiments,
        notes: notes,
    }

    // Clear Alert Messages
    document.querySelectorAll('.alert').forEach((alert) => alert.remove());

    const formInputs = [...form.elements];
    formInputs.forEach((input) => {
        
        input.classList.remove('input-error');
        if (input.type != 'submit' && input.value === '') {
            formIsValid = false;
            input.classList.add('input-error');
        };

        if (formIsValid && input.type !== "submit") {
            releaseData[input.name] = input.value;
        }
    });

    if (formIsValid) {
        // SUBMIT DATA TO SERVER
        fetch('api/v1/release/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
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