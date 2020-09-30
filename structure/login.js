window.onload = initializeForm;
var formAutenticacion;

function initializeForm() {
    initializeFirebase();
    formAutenticacion = document.getElementById("form-login");
    formAutenticacion.addEventListener("submit", doLogin, false);
    document.getElementById("signUp").addEventListener("click", goSignUp);
}
function goSignUp(){
    window.location.href="signUp.html";
}
function doLogin(event) {
    event.preventDefault();
    checkForm();
    var email = event.target.email.value;
    var password = event.target.password.value;
    var firebaseAuth = firebase.auth();
    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(function (result) {
            if(user.uid == "KXkEZMZplMhj7XfbDkX3MytD5cP2"){
                window.location.href = "form.html";
            }else{
                window.location.href = "formLight.html";
            }
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        }
        );
}
function checkForm() {
    if (document.forms["form-login"]["email"].value == "") {
        document.getElementById("voidEmail").style.display = "block";
    } else {
        document.getElementById("voidEmail").style.display = "none";
    }

    if (document.forms["form-login"]["password"].value == "") {
        document.getElementById("voidPassword").style.display = "block";
    } else {
        document.getElementById("voidPassword").style.display = "none";
    }
}

function initializeFirebase() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAWbGwKpRXYV29C2BEn8kjZMDTWH5VPKyI",
        authDomain: "lnd-pra-1.firebaseapp.com",
        databaseURL: "https://lnd-pra-1.firebaseio.com",
        projectId: "lnd-pra-1",
        storageBucket: "lnd-pra-1.appspot.com",
        messagingSenderId: "459717631123"
    };
    firebase.initializeApp(config);
}