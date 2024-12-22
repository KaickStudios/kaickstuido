// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Elementos de la interfaz
const statusDiv = document.getElementById("status");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const updateForm = document.getElementById("updateForm");
const newUserName = document.getElementById("newUserName");
const newEmail = document.getElementById("newEmail");
const newPassword = document.getElementById("newPassword");

// Registrar usuario
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            statusDiv.innerHTML = "Usuario registrado con éxito";
            registerForm.reset();
        })
        .catch(error => {
            statusDiv.innerHTML = error.message;
        });
});

// Iniciar sesión
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            statusDiv.innerHTML = "Bienvenido, " + userCredential.user.email;
            loginForm.style.display = "none";
            updateForm.style.display = "block"; // Mostrar formulario de actualización
        })
        .catch(error => {
            statusDiv.innerHTML = error.message;
        });
});

// Cambiar datos de usuario
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    // Cambiar nombre de usuario, correo y contraseña
    const newEmailValue = newEmail.value;
    const newPasswordValue = newPassword.value;

    if (newEmailValue) {
        user.updateEmail(newEmailValue)
            .then(() => {
                statusDiv.innerHTML = "Correo electrónico actualizado";
            })
            .catch(error => {
                statusDiv.innerHTML = error.message;
            });
    }

    if (newPasswordValue) {
        user.updatePassword(newPasswordValue)
            .then(() => {
                statusDiv.innerHTML = "Contraseña actualizada";
            })
            .catch(error => {
                statusDiv.innerHTML = error.message;
            });
    }
});
