window.onload = initializeForm;
var refFormulario;
var refDatabase;
var refTbody;
var refDatoModified;

var nameImageFirebase;
var urlImageFirebase;
var newImage;
var CREATE = "Añadir Encuesta";
var UPDATE = "Modificar Encuesta";
var modo = CREATE;

var file;

function initializeForm() {
    initializeFirebase();
    refTbody = document.getElementById("tbody_form");
    refDatabase = firebase.database().ref().child("Datos/Formularios");
    mostrarDatabases();
}
function mostrarDatabases() {
    refDatabase.on("value", function (snap) {
        var datos = snap.val();

        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + datos[key].name + '</td>'
                + '<td>' + datos[key].apellido + '</td>'
                + '<td>' + datos[key].segundoApellido + '</td>'
                + '<td>' + datos[key].genero + '</td>'
                + '<td>' + datos[key].pregunta1 + '</td>'
                + '<td>' + datos[key].pregunta2 + '</td>'
                + '<td>' + datos[key].pregunta3 + '</td>'
                + '<td>' + datos[key].pregunta4 + '</td>'
                + '<td>' + datos[key].rol + '</td>'
                + '<td>' + datos[key].main + '</td>'
                + '<td>' + datos[key].page + '</td>'
                + '<td>' + datos[key].anime + '</td>'
                + '<td> <img class="img-thumbnail" src="' + datos[key].url + '" alt="imagenFirebase"/> </td>';
        }
        refTbody.innerHTML = filasAMostrar;
    });
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