const form = document.getElementById('addRelease');

/* -------- Submit Form Event Listener -------- */
form.addEventListener('submit', handleReleaseSbumit);

/* -------- Handle Submit -------- */
function handleReleaseSbumit(event) {
    let formIsValid = true;
    event.preventDefault();

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
            renderProfile(dataObj);
        })
        .catch((error) => console.log(error));
    };

    getUser();

    function renderProfile(dataObj) {
        console.log(dataObj.data.firstName);
    };

    function newRelease() {
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
                formIsValid = fase;
                input.classList.add('input-error');
            }

            if (formIsValid) {
                releaseData[input.name] = input.value; //NOTE check out input.name
            }
        });

        if (formIsValid) {
            fetch('api/v1/release', {
                method: 'POST',
                headers: {
                    'Content-type': 'application',
                },
                body: JSON.stringify(releaseData),
            })
            .then((dataStream) => dataStream.json())
            .then((dataObj) => {
                console.log(dataObj.__id);
                window.location = '/release'; //NOTE check out where redirect should go to
            })
            .catch((error) => console.log(error));
        }
    }
    newRelease();
}