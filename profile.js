import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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
gettingDataForfriends(user.email)



let currentUser = document.getElementById("currentuser");
let itemlist = document.getElementById("itemlist");
let itemlist1 = document.getElementById("itemlist1");
let itemlist2 = document.getElementById("itemlist2");

window.onload = function () {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.replace('index.html')
      } else {
          
          const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // console.log(docSnap.data().userName)
                currentUser.innerHTML += `
                ${docSnap.data().userName}
                `;
                itemlist.innerHTML = `
                ${docSnap.data().professionName}
                `;
                itemlist1.innerHTML = `
                ${docSnap.data().dateofbirth}
                `;
                itemlist2.innerHTML = `
                ${docSnap.data().email}
                `;
            } else {
                console.log("No such document!");
            }
      }
    });
  }

  const gettingDataForfriends = async (email) => {
    const friendsTab = document.getElementById("friendsTab");
    friendsData.style
    const q = query(collection(db, "users"), where("email", "!=", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.uid, " => ", doc.data());
        friendsTab.innerHTML += `
        <tr>
            <td id="friendsTabTd1"><i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; ${doc.data().userName}</td>
            <td id="friendsTabTd2"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp; ${doc.data().email}</td>
        </tr>
       
        `
    })
}
