//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
// var firebaseConfig = {
//     apiKey: ,
//     authDomain: ,
//     projectId: ,
//     storageBucket: ,
//     messagingSenderId: ,
//     appId:
// };
const firebaseConfig = {
    apiKey: "AIzaSyBy0nBs8sH4qFFBTML0bL050lFj9EreMBg",
    authDomain: "fir-ee139.firebaseapp.com",
    projectId: "fir-ee139",
    storageBucket: "fir-ee139.appspot.com",
    messagingSenderId: "15364735113",
    appId: "1:15364735113:web:a7cdf14e3b339131548658"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
