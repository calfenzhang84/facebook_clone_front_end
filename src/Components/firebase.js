import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCooBlr3GwPgUO5JXjJtfTtXiiL1-0Hf8w",
    authDomain: "facebook-clone-525b6.firebaseapp.com",
    projectId: "facebook-clone-525b6",
    storageBucket: "facebook-clone-525b6.appspot.com",
    messagingSenderId: "1063789665504",
    appId: "1:1063789665504:web:a172b378700889ed368485",
    measurementId: "G-YB4J61E539"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;