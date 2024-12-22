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
