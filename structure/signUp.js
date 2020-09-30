window.onload = initializeForm;

function initializeForm() {
    initializeFirebase();
    document.getElementById("form-signup").addEventListener("submit", doSignUp);
    document.getElementById("back").addEventListener("click",goBack);
    
}

function goBack(){
    window.location.href="login.html";
}

function doSignUp(event) {
    event.preventDefault();
    checkForm();
    var email = event.target.email.value;
    var password = event.target.password.value;
    var passwordConfirm = event.target.passwordConfirm.value;
    if (password == passwordConfirm) {
        var firebaseAuth = firebase.auth();
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                window.location.href = "login.html";
            }
            ).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            }
            );
    } else {
        event.preventDefault();
        document.getElementById("PasswordUnConfirm").style.display = "block";
    }
}
function checkForm() {
    if (document.forms["form-signup"]["email"].value == "") {
        document.getElementById("voidEmail").style.display = "block";
    } else {
        document.getElementById("voidEmail").style.display = "none";
    }

    if (document.forms["form-signup"]["password"].value == "") {
        document.getElementById("voidPassword").style.display = "block";
    } else {
        document.getElementById("voidPassword").style.display = "none";
    }

    if (document.forms["form-signup"]["passwordConfirm"].value == "") {
        document.getElementById("voidPasswordConfirm").style.display = "block";
    } else {
        document.getElementById("voidPasswordConfirm").style.display = "none";
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