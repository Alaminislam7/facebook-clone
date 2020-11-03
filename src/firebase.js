import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB3_snjo2NZOtDWGPNKMNfXYHNZ4Ye48_8",
    authDomain: "facebook-clone-92de0.firebaseapp.com",
    databaseURL: "https://facebook-clone-92de0.firebaseio.com",
    projectId: "facebook-clone-92de0",
    storageBucket: "facebook-clone-92de0.appspot.com",
    messagingSenderId: "1078319397056",
    appId: "1:1078319397056:web:dd02a0ec68751329f69525"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;