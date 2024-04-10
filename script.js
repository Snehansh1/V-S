import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDa2npcORUGvbYUoOuTuCz0gR-Fg7F0hHg",
  authDomain: "vswipe-login-a73fa.firebaseapp.com",
  databaseURL: "https://vswipe-login-a73fa-default-rtdb.firebaseio.com",
  projectId: "vswipe-login-a73fa",
  storageBucket: "vswipe-login-a73fa.appspot.com",
  messagingSenderId: "754450198712",
  appId: "1:754450198712:web:8529a019ac72761aab444d",
  measurementId: "G-REQCJKHNLX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const registrationInput = document.getElementById("registration");
const signupregistrationInput = document.getElementById("registration-signup");
const passwordInput = document.getElementById("password");
const signupPasswordInput = document.getElementById("password-signup");
const confirmSignUpPasswordInput = document.getElementById("confirm-password-signup");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct")
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

// var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  const signupregistration = signupregistrationInput.value;
  const signupPassword = signupPasswordInput.value;
  const confirmSignUpPassword = confirmSignUpPasswordInput.value;

  if(signupregistration.length !== 10) {
      window.alert("registration number must be 10 digit mumber")
      isVerified = false;
  }

  if(signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.")
      isVerified = false;
  }
  
  
  if(isVerified) {
    createUserWithEmailAndPassword(auth, signupregistration + "@gmail.com", signupPassword)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      window.alert("Success! Account created.");
      window.location.href = "index1.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Error occurred. Try again.");
    });
  }
});

submitButton.addEventListener("click", function() {
  const registration = registrationInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, registration + "@gmail.com", password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      window.location.href = "home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("invalid credentials. Try again.");
      window.alert("invalid credentials. Try again.");
    });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createacct.style.display = "none";
});