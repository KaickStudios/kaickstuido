// Importar las funciones necesarias desde Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBd0eUjzBBxKt3mc8cKq-HEhyfd3AHuffY",
  authDomain: "kaic-studio.firebaseapp.com",
  projectId: "kaic-studio",
  storageBucket: "kaic-studio.appspot.com",
  messagingSenderId: "705458456255",
  appId: "1:705458456255:web:aaa371d4ad295d4ea5e80a",
  measurementId: "G-3CS1GT46BV"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtener referencias de los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

// Funciones para autenticación
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuario registrado:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error al registrar el usuario:", error.message);
    });
}

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuario iniciado sesión:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error.message);
    });
}

function logoutUser() {
  signOut(auth)
    .then(() => {
      console.log("Usuario cerrado sesión");
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error.message);
    });
}

// Funciones para Firestore
function saveDataToFirestore(collection, documentId, data) {
  setDoc(doc(db, collection, documentId), data)
    .then(() => {
      console.log("Documento guardado con éxito");
    })
    .catch((error) => {
      console.error("Error al guardar el documento:", error.message);
    });
}

function getDataFromFirestore(collection, documentId) {
  getDoc(doc(db, collection, documentId))
    .then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Documento obtenido:", docSnap.data());
      } else {
        console.log("No se encontró el documento");
      }
    })
    .catch((error) => {
      console.error("Error al obtener el documento:", error.message);
    });
}

