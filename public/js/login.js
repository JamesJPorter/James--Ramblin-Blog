const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();

    const password = document.querySelector('#password').value.trim();

    const response = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            username: username, 
            password: password
        }),
        headers: {'Content-Type': 'application/json'},
    });
    console.log("response", response)

    if (response.ok) {
        document.location.replace('/') // eventually ('/dashboard)
    } else {
        alert("Invalid credentials");
    }
};
 
 
 document.querySelector('form').addEventListener('submit', loginFormHandler)