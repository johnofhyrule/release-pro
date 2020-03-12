const form = document.getElementById('addRelease');

/* -------- Submit Form Event Listener -------- */
form.addEventListener('click', handleReleaseSbumit);

/* -------- Handle Submit -------- */
function handleReleaseSbumit(event) {
    let formIsValid = true;
    event.preventDefault();

    const type = document.getElementById('type').value;
    const os = document.getElementById('os').value;
    const version = document.getElementById('version').value;
    const manager = document.getElementById('manager').value;
    const experiments = document.getElementById('experiments').value;
    const notes = document.getElementById('notes').value;

    const releaseData = {
        type: type,
        os: os,
        version: version,
        manager: manager,
        experiments: experiments,
        notes: notes,
    }

    const formInputs = [...form.elements];
    formInputs.forEach((input) => {
        input.classList.remove('input-error');
        if (input.type != 'submit' && input.value === '') {
            formIsValid = false;
            input.classList.add('input-error');
        }

        if (formIsValid) {
            releaseData[input.name] = input.value;
        }
    });

    if (formIsValid) {
        fetch('api/v1/release/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application',
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