const form = document.getElementById('signupForm');

// -------- SUBMIT EVENT LISTENER
form.addEventListener('submit', handleSignupSubmit);

// -------- HANDLE SUBMIT
function handleSignupSubmit(event) {
    let formIsValid = true
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;

    const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        role: role,
        password: password,
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
                Password must be at least 4 characters.
                </div>
            `)
        };

        if (formIsValid) {
            userData[input.name] = input.value;
        }
    });

    if (formIsValid) {
        // SUBMIT DATA TO SERVER
        fetch('/api/v1/auth/signup', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((dataStream) => dataStream.json())
            .then((dataObj) => {
                // console.log(dataObj);
                window.location = '/login';
            })
            .catch((error) => console.log(error));
    }
}