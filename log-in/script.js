// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYfvInr17MZW53auGkAqY0sF4MMDeXFfc",
  authDomain: "always-fit-4da4d.firebaseapp.com",
  projectId: "always-fit-4da4d",
  storageBucket: "always-fit-4da4d.appspot.com",
  messagingSenderId: "557017066129",
  appId: "1:557017066129:web:24f41bd46cf0571efbad30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  input


const submit = document.getElementById("submit");
const auth = getAuth();

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "/home/home.html";
      // alert("account created");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
