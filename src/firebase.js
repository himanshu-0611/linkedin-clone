import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAblCeo1q-rlaZuW4UyogZ_jpHidqKj7c4",
    authDomain: "linkedin-clone-fc6f6.firebaseapp.com",
    projectId: "linkedin-clone-fc6f6",
    storageBucket: "linkedin-clone-fc6f6.appspot.com",
    messagingSenderId: "846195710855",
    appId: "1:846195710855:web:85a5e226077fa3689e9122"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebase };
export default db;