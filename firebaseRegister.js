import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBY5CqhEFs9dMHgA0P3XyPPVX5M5DCRUOk",
  authDomain: "website-7ef37.firebaseapp.com",
  projectId: "website-7ef37",
  storageBucket: "website-7ef37.appspot.com",
  messagingSenderId: "821672260922",
  appId: "1:821672260922:web:eaed0cced16c8601c04c03",
  measurementId: "G-7TCBG7ECWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const user = userCredential.user;
        window.location.href = "mainPage.html";
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
});
