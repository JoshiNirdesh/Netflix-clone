// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXaF9KbAWgZt4FGsN0em2SolvnMRKqCkI",
  authDomain: "netflix-clone-60160.firebaseapp.com",
  projectId: "netflix-clone-60160",
  storageBucket: "netflix-clone-60160.firebasestorage.app",
  messagingSenderId: "781978941568",
  appId: "1:781978941568:web:b272f4a95059490f134e65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(
      collection(db, "user", {
        uid: user.uid,
        name,
        authP,
      })
    );
  } catch (error) {}
};
