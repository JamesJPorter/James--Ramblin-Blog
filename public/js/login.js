const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();

    const password = document.querySelector('#password').value.trim();

    console.log(username, password)

    const response = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            username: username, 
            passowrd: password
        }),
        headers: {'Content-Type': 'application/json'},
    });
    console.log("response", response)
};
 
 
 document.querySelector('form').addEventListener('submit', loginFormHandler)