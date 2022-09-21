function renderLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
}

let users = [];

function registerUser() {
  // to load existing value from local storage
  users = (localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

  // storing data as objects in the array
  let user = new Object();
  let inputUsername = document.getElementById("username");
  let inputEmail = document.getElementById("email");
  let inputPassword = document.getElementById("password");
  user.username = inputUsername.value;
  user.email = inputEmail.value;
  user.password = inputPassword.value;
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // clearing the input boxes
  // inputUsername.value = "";
  // inputEmail.value = "";
  // inputPassword.value = "";
  renderWelcomeScreen();
}

function logInUser() {
  // to load existing value from local storage
  // document.getElementById("login").style.display = "block";
  users = (localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

  let loginUsername = document.getElementById("loginUsername").value;
  let loginPassword = document.getElementById("loginPassword").value;
  let output = users.filter(function(user){
    if(user.username == loginUsername && user.password == loginPassword)
      return true;
    else
      return false;
  });

console.log(output);
console.log(output.length);
  if(output.length == 1 )
    renderWelcomeScreen();
  else{
    document.getElementById("accessDenied").style.display = "block";
    document.getElementById("login").style.display = "none";
  }
}

function renderWelcomeScreen() {
  document.getElementById("welcomeScreen").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "none";
}

function returnToSignUp(){
  document.getElementById("signup").style.display = "block";
  document.getElementById("accessDenied").style.display = "none";
}
