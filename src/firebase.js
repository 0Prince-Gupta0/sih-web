import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUUVnBRCZX3tJkBc0p-W4T5DDdQ4jQj44",
    authDomain: "sih-web-6236e.firebaseapp.com",
    projectId: "sih-web-6236e",
    storageBucket: "sih-web-6236e.appspot.com",
    messagingSenderId: "637626348962",
    appId: "1:637626348962:web:45ff3c1136689b5c60eefb"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
   return err;
  }
};
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    return err;
  }
};
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};