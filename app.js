{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import{
    createUserWithEmailAndPassword  ,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
// getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCx58Q-ZJklKMNSIIeZy8lhkzx3IaAuKDk",
    authDomain: "input-88449.firebaseapp.com",
    projectId: "input-88449",
    storageBucket: "input-88449.appspot.com",
    messagingSenderId: "739851458745",
    appId: "1:739851458745:web:1226463d129ca44f406368",
    measurementId: "G-5Q184YFRH8"
};
const email=document.querySelector("#email")
const email2=document.querySelector("#email2")
const password=document.querySelector("#password")
const password2=document.querySelector("#password2")
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(app)
// const button=document.querySelector("#submit")
const dashboard=document.querySelector("#dashboard")
console.log(dashboard)
const button2=document.querySelector("#submit2")
const header=document.querySelector(".container")
console.log(header)
const userInfo=document.querySelector("#user_info")
const container=document.querySelector(".pre-header")
console.log(container)
const password3=document.querySelector("#password3")
console.log(password3)
const button=document.querySelector("#submit")
console.log(button)
// const auth = getAuth();
const logOut=document.querySelector("#logout")


const auth = getAuth();
button.addEventListener("click",()=>{
  let pass = password.value;
  let confirmPass = password3.value;

if(confirmPass !== pass){
  return alert("check  your password again")
} 
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    alert("sign up")
    console.log(password.value)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    alert("not sign up")
  });
  }
  
   
    
   
  


  





)



button2.addEventListener("click",()=>{
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("logged in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      dashboard.style.display="block"
      header.style.display="none"
      container.style.display="none"
      // alert("loged out")
    } else {
      // alert("loged in")
      // dashboard.style.display="none"
      // header.style.display="none"
      // container.style.display="block"
      // User is signed out
      // ...
      // header.style.display="block"
      // container.style.display="block"
      // dashboard.style.display="none"
      
    }

  })
  logOut.addEventListener("click",()=>{
    dashboard.style.display="none"
    container.style.display="block"
    // alert("logout")
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // alert("loged out")
      // An error happened.
    });
    
  })


});





  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      dashboard.style.display="block"
      header.style.display="none"
    } else {
      // alert("loged in")
      // User is signed out
      // ...
      // header.style.display="block"
      // container.style.display="block"
      // dashboard.style.display="none"
      
    }

  })
  logOut.addEventListener("click",()=>{
    dashboard.style.display="none"
    container.style.display="block"
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("logged out")
    }).catch((error) => {
      // alert("loged out")
      alert("logged out")

      // An error happened.
    });
    
  })


