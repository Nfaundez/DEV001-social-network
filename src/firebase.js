// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, doc, setDoc, deleteDoc, getDocs, onSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBkrQUyNERzhwhuYCXYB_Fky75P67xmmXo',
  authDomain: 'buena-muchacha.firebaseapp.com',
  projectId: 'buena-muchacha',
  storageBucket: 'buena-muchacha.appspot.com',
  messagingSenderId: '176809359151',
  appId: '1:176809359151:web:388bfe578cfe63135253da',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
// Mi funcion signin es aquella que registra con google
export function signIn() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
export const saveTask = (publicacion) => addDoc(collection(db, 'tasks'), { publicacion }); // sacar return y resolver promesa aca con .then y catch
// guardar y listar datos !

export const getTasks = () => getDocs(collection(db, 'tasks'));
export const onGetTask = (callback) => onSnapshot(collection(db, 'tasks'), callback);
export const deletePost = (id) => deleteDoc(collection(db, 'tasks'), id);
