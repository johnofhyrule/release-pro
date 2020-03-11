const form = document.getElementById('loginForm');

// -------- SUBMIT EVENT LISTENER
form.addEventListener('submit', handleLoginSubmit);

// -------- HANDLE SUBMIT
function handleLoginSubmit(event) {
    let formIsValid = true;
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        email: email,
        password: password,
    }
    console.log(userData);
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
        fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            })
            .then((dataStream) => dataStream.json())
            .then((dataObj) => {
                // console.log(dataObj);
                window.location = '/release';
            })
            .catch((error) => console.log(error));
    }
}