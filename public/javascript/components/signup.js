export const signup = () => {
const container = document.getElementById("root");
const signup = document.createElement('div')
signup.id = 'signup'
signup.className = 'signup'
container.appendChild(signup)
const h1 = document.createElement('h1')
h1.innerText = 'This is the Signup Page'
h1.className = "d-flex align-items-center justify-content-center text-primary";
signup.appendChild(h1)

}

signup()