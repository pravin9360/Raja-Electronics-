import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPvu4gcvxO-xW5l6ZqiqcxJz5s_s6MFd0",
  authDomain: "raja-db0b4.firebaseapp.com",
  projectId: "raja-db0b4",
  storageBucket: "raja-db0b4.appspot.com",
  messagingSenderId: "274954579632",
  appId: "1:274954579632:web:6e338c942d346dbd7c5575",
  measurementId: "G-TXXPGZ9EPP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };