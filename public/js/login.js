const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();

  const password = document.querySelector("#password").value.trim();

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("response", response);

  if (response.ok) {
    document.location.replace("/"); // eventually ('/dashboard)
  } else {
    alert("Invalid credentials");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#registerUsername").value.trim();
  const password = document.querySelector("#registerPassword").value.trim();

  console.log(username, password);

  if (username && password) {
    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

let registerBtn = document.querySelector(".register-form"); 

if(registerBtn){
document.querySelector(".register-form").addEventListener("submit", signupFormHandler)};

let loginBtn = document.querySelector(".login-form");

if(loginBtn){
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);}
