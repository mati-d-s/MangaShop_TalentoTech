import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYurvqxgCTQ92os8BvGnGAoE3g3YrTR0c",
  authDomain: "prueba-auth-e64d8.firebaseapp.com",
  projectId: "prueba-auth-e64d8",
  storageBucket: "prueba-auth-e64d8.firebasestorage.app",
  messagingSenderId: "1042020842950",
  appId: "1:1042020842950:web:b2694d263646612bb606c7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export function crearUsuario(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        console.log("Credenciales", userCredential)
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        console.log(error.code, error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}










const provider = new GoogleAuthProvider();




auth.useDeviceLanguage()
export function logearG(){
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log("test", result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        console.log("test error", error )
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

export function registrarEmailPass(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

export function loginEmailPass(email, password){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
