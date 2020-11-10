// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtMaU700K-fsB-V_ThYwdCHCXfoWJ1Dos",
  authDomain: "facebook-clone-ee169.firebaseapp.com",
  databaseURL: "https://facebook-clone-ee169.firebaseio.com",
  projectId: "facebook-clone-ee169",
  storageBucket: "facebook-clone-ee169.appspot.com",
  messagingSenderId: "507581956157",
  appId: "1:507581956157:web:b483d9caf475b097412a54",
  measurementId: "G-PPQTFJFRJQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
