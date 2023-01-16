import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDBWiA9Dv8gw2Y_ZFXKguaVG-k6scEvqqc",
  authDomain: "vueblog-8f97c.firebaseapp.com",
  projectId: "vueblog-8f97c",
  storageBucket: "vueblog-8f97c.appspot.com",
  messagingSenderId: "688407441521",
  appId: "1:688407441521:web:a61f4effa5949511af6bd0",
}

// firebase.initializeApp(firebaseConfig)
// const projectFirestore = firebase.firestore()

// export { projectFirestore }

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

// export const postsConf = collection(db, "posts")
