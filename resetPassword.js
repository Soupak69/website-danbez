import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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

document.getElementById('forgot-password').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                console.error('Error sending password reset email:', error);
                alert('Error sending password reset email. Please try again.');
            });
    } else {
        alert('Error');
    }
});
