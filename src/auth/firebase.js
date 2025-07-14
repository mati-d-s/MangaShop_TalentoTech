import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Configuración del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyDYurvqxgCTQ92os8BvGnGAoE3g3YrTR0c",
  authDomain: "prueba-auth-e64d8.firebaseapp.com",
  projectId: "prueba-auth-e64d8",
  storageBucket: "prueba-auth-e64d8.appspot.com", 
  messagingSenderId: "1042020842950",
  appId: "1:1042020842950:web:b2694d263646612bb606c7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

// 🔐 Registro con email y password
export function crearUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// 🔐 Login con email y password
export function loginEmailPass(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 🔐 Login con Google
const provider = new GoogleAuthProvider();
export function logearG() {
  return signInWithPopup(auth, provider);
}

// Exportar 
export { auth };
