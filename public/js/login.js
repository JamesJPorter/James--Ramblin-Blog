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
        const message = await response.json();
        console.log("response message", message)
        alert(message);
    }
};
 
 
 document.querySelector('form').addEventListener('submit', loginFormHandler)