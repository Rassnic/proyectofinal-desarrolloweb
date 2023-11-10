import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// const firebaseConfig = {
//     apiKey: "AIzaSyDj-3qE7YcwmK2ByTpAN2oQxLGnGLyi9ng",
//     authDomain: "insta-clone-8d193.firebaseapp.com",
//     projectId: "insta-clone-8d193",
//     storageBucket: "insta-clone-8d193.appspot.com",
//     messagingSenderId: "554195562820",
//     appId: "1:554195562820:web:f4c49f374c4a3b00b6e711"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCdRJe_yJ6B3ipfd3CqrnyoxvkuaP7ETrA",  
    authDomain: "insta-clone-1309f.firebaseapp.com",  
    projectId: "insta-clone-1309f",  
    storageBucket: "insta-clone-1309f.appspot.com",  
    messagingSenderId: "487023706526",  
    appId: "1:487023706526:web:28df81a855fd37ef99968f"  
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const storage = firebase.storage()
const db = firebaseApp.firestore()
export { auth, db, storage }