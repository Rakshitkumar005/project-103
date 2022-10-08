// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBoyMJRdZCJEiV_k0z9Ow2Nd94SEyJwZO8",
    authDomain: "kwitter-63dc0.firebaseapp.com",
    databaseURL: "https://kwitter-63dc0-default-rtdb.firebaseio.com",
    projectId: "kwitter-63dc0",
    storageBucket: "kwitter-63dc0.appspot.com",
    messagingSenderId: "995015619241",
    appId: "1:995015619241:web:840bfaf9796429d396afb8"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE
  


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref("room_name").push({
          name:user_name,
          message:msg,
          like:0,
    })
    document.getElementById("msg").value="";
}


