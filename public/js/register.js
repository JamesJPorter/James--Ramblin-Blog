// const registerFormHandler = async (event) => {
//     event.preventDefault();

//     const username = document.querySelector('#registerUsername').value.trim();

//     const password = document.querySelector('#registerPassword').value.trim();

//     console.log(username, password)

//     const response = await fetch('/api/user/register', {
//         method: 'POST', 
//         body: JSON.stringify({
//             username: username, 
//             password: password
//         }),
//         headers: {'Content-Type': 'application/json'},
//     });
//     console.log("response", response)
// };
 
 
//  document.querySelector('form').addEventListener('submit', registerFormHandler)