
import { toast } from 'react-hot-toast';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo5iVUyfEfY2fA79fULKMKz0vFdCQi1xE",
  authDomain: "vibez-2120e.firebaseapp.com",
  databaseURL: "https://vibez-2120e.firebaseio.com",
  projectId: "vibez-2120e",
  storageBucket: "vibez-2120e.appspot.com",
  messagingSenderId: "902893329566",
  appId: "1:902893329566:web:7e9484bd398275a603af8f",
  measurementId: "G-846YPSLLY3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const signIn=(email,password,setNavBool)=>{

toast.loading("Signing in...")
  const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    // Signed in 
    const user = userCredential.user;
    // store in local storage like shredPreference in flutter
    localStorage.setItem('user',JSON.stringify(user));
    toast.dismiss();
    toast.success("Signed In Successfully")
    setNavBool(true)
    // ...
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.dismiss();
    toast.error(error.message.toString())
    setNavBool(false)
  });

}

export const signUp=(email,password,setNavBool)=>{
    toast.loading("Signing in...")
    const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('user',JSON.stringify(user));
    toast.dismiss();
    toast.success("Signed In Successfully")
   
    setNavBool(true)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.dismiss();
    toast.error(error.message.toString())
    setNavBool(false)
    // ..
  });
}