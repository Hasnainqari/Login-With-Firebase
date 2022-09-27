import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmf2D-r9b1pcPxG3G0EmRBijDlpXdR7HI",
    authDomain: "login-with-firebase-7fb17.firebaseapp.com",
    projectId: "login-with-firebase-7fb17",
    storageBucket: "login-with-firebase-7fb17.appspot.com",
    messagingSenderId: "451708925508",
    appId: "1:451708925508:web:d06ec5b9907cbd72a06e11"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

let register_btn = document.getElementById("submitt");

register_btn.addEventListener("click", function () {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    createUserWithEmailAndPassword(auth, email.value, password.value, confirmPassword,)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log("user=>", user);
            Swal.fire("User", "Congrates Signup Successfully");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log("error=>", errorMessage);
            Swal.fire("Invalid!", errorMessage);

        });
        email.value = "";
        password.value = "";
        confirmPassword.value = ""; 
})

let login_btn = document.getElementById("my_login");

login_btn.addEventListener("click", function () {
    let login_Name = document.getElementById("login_name");
    let profession_Name = document.getElementById("profession_name");
    let login_Email = document.getElementById("login_email");
    let login_Password = document.getElementById("login_password");
    signInWithEmailAndPassword(auth, login_Email.value, login_Password.value, login_Name.value, profession_Name.value)
        .then((userCredential) => {

            const user = userCredential.user;
            // console.log("user=>", user);
            Swal.fire("User", "Successfully Logged");
            setTimeout(() => {
                window.location = "./profile.html"
            }, 1500)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // console.log("error=>", errorMessage);
            Swal.fire("Invalid!", errorMessage);
        });
    login_Name.value = "";
    login_Email.value = "";
    login_Password.value = "";
    profession_Name.value = "";

let nameUser = document.getElementById("nameUser");
nameUser.innerHTML = login_Name;
})

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});