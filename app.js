import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, getFirestore }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDmf2D-r9b1pcPxG3G0EmRBijDlpXdR7HI",
    authDomain: "login-with-firebase-7fb17.firebaseapp.com",
    projectId: "login-with-firebase-7fb17",
    storageBucket: "login-with-firebase-7fb17.appspot.com",
    messagingSenderId: "451708925508",
    appId: "1:451708925508:web:d06ec5b9907cbd72a06e11",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

let register_btn = document.getElementById("submitt");

register_btn.addEventListener("click", function () {
    let userName = document.getElementById("user_name");
    let professionName = document.getElementById("profession_name");
    let dateofbirth = document.getElementById("dateofbirth");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    createUserWithEmailAndPassword(auth, email.value, password.value, confirmPassword.value, userName.value, professionName.value, dateofbirth.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log("user=>", user);
            Swal.fire("User", "Congrates Registered Successfully");
            await setDoc(doc(db, "users", user.uid), {
                userName: userName.value,
                professionName: professionName.value,
                dateofbirth: dateofbirth.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error=>", errorMessage);
            Swal.fire("Invalid!", errorMessage);

        });
})

let login_btn = document.getElementById("my_login");
login_btn.addEventListener("click", function () {
    let login_Email = document.getElementById("login_email");
    let login_Password = document.getElementById("login_password");

    signInWithEmailAndPassword(auth, login_Email.value, login_Password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                icon: 'success',
                text: 'Login Succesfully',
            })

            setTimeout(() => {
                window.location = "./profile.html"
            }, 1500)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire("Error!", "Invalid!", errorMessage);
        });
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

