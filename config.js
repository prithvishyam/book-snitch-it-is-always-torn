import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyDitNW6edjU1-pi2dUT8kprR599UwMarxk",
  authDomain: "how-to-snitch.firebaseapp.com",
  projectId: "how-to-snitch",
  storageBucket: "how-to-snitch.appspot.com",
  messagingSenderId: "1040302144277",
  appId: "1:1040302144277:web:af1b2bb643fbe0d726871c"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

