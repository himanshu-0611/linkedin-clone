import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2uCkyIM3tb4zvoJ0_YPXOEg0xxEF6ak",

  authDomain: "recskill-d02fe.firebaseapp.com",

  projectId: "recskill-d02fe",

  storageBucket: "recskill-d02fe.appspot.com",

  messagingSenderId: "740552029923",

  appId: "1:740552029923:web:e3594a8b099f46d63837d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebase };
export default db;
