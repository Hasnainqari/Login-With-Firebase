import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth,onAuthStateChanged,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, getFirestore, getDoc, getDocs, onSnapshot, collection, }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
const db = getFirestore();


let currentUser = document.getElementById("currentuser");
let itemlist = document.getElementById("itemlist");

window.onload = function () {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.replace('index.html')
      } else {
          
          const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log(docSnap.data().userName)
                // console.log(currentUser)
                currentUser.innerHTML += `
                ${docSnap.data().userName}
                `;
                itemlist.innerHTML = `
                ${docSnap.data().professionName}
                `
            } else {
                console.log("No such document!");
            }
      }
    });
  }




  var signOutbtn = document.getElementById('signOutbtn');
signOutbtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.replace('index.html')
  }).catch((error) => {
    // An error happened.
  });
})
//   shai hai 
// name tw aya na jo data he database me wo nh araha tha