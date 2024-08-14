import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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

const form = document.getElementById('login-form');
const rememberMeCheckbox = document.getElementById('remember-me');

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const rememberMe = rememberMeCheckbox.checked;

    try {
        
        const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistence);

       
        await signInWithEmailAndPassword(auth, email, password);

      
        window.location.href = "mainPage.html";
    } catch (error) {
        
        const errorMessage = error.message;
        alert(errorMessage);
    }
});
