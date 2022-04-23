// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
apiKey: "AIzaSyCoulD_2kTPxyhuhsVQLrhRS3dYzPpPDLc",
  authDomain: "gilmatiendaarte.firebaseapp.com",
  projectId: "gilmatiendaarte",
  storageBucket: "gilmatiendaarte.appspot.com",
  messagingSenderId: "1072146689450",
  appId: "1:1072146689450:web:edf74f9dd4341cf1ee0fd3",
  measurementId: "G-6Q8NX9QWLG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



