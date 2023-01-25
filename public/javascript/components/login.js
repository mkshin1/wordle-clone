const isWorking = () => {
  return true;
};
const container = document.getElementById("root");
container.className =
  "container-fluid min-vh-100 d-flex align-items-center justify-content-center";

const login = () => {
  const login = document.getElementById("login");

  // create the header
  const header = document.createElement("h1");
  login.appendChild(header);
  header.innerHTML = "Wordle Clone";
  login.className = "w-25";
  header.className =
    "d-flex align-items-center justify-content-center text-primary";

  // Create the form element
  let form = document.createElement("form");
  form.className = "d-flex flex-column";

  // Create the text input element
  let input = document.createElement("input");
  input.type = "text";
  input.name = "username";
  input.id = "username";
  input.className = "form-control-lg";
  input.placeholder = "Enter your username";

  let password = document.createElement("input");
  password.type = "password";
  password.name = "password";
  password.id = "password";
  password.className = "form-control-lg text-muted";
  password.placeholder = "Enter your password";

  // Append the text input to the form
  form.appendChild(input);
  form.appendChild(password);

  // Create the submit button element
  let submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Login";
  submitButton.className = "btn btn-primary btn-lg";

  // a href link to register account
  let registerLink = document.createElement("a");
  registerLink.href = "/register";
  registerLink.innerHTML = "Register here";

  // Append the submit button to the form
  form.appendChild(submitButton);
  form.appendChild(registerLink);

  // Add the form to the document
  login.appendChild(form);
};

export { login, isWorking };
