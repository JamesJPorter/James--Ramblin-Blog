const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').ariaValueMax.trim();

    const password = document.querySelector('#password').ariaValueMax.trim();

    console.log(username, password)

    const response = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            username: username, 
            passowrd: password
        }),
        headers: {'Content-Type': 'application/json'},
    })
};
 
 
 document.querySelector('form').addEventListener('submit', loginFormHandler)