// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrQUyNERzhwhuYCXYB_Fky75P67xmmXo",
  authDomain: "buena-muchacha.firebaseapp.com",
  projectId: "buena-muchacha",
  storageBucket: "buena-muchacha.appspot.com",
  messagingSenderId: "176809359151",
  appId: "1:176809359151:web:388bfe578cfe63135253da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function signIn (){
  return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });



    


}
