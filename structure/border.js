window.onload = inicializar;
//Support
var formTechnologyS;
var refTechnologyS;
var tbodyTablaTechnologyS;
var refDeTechnologyAEditarS;

//Corta
var formTechnologyC;
var refTechnologyC;
var tbodyTablaTechnologyC;
var refDeTechnologyAEditarC;

//Media 
var formTechnologyM;
var refTechnologyM;
var tbodyTablaTechnologyM;
var refDeTechnologyAEditarM;

//Larga
var formTechnologyL;
var refTechnologyL;
var tbodyTablaTechnologyL;
var refDeTechnologyAEditarL;

//buttons
var CREATE = "Añadir Tecnología";
var UPDATE = "Modificar Tecnología";
var modo = CREATE;


function inicializar() {
    inicializarFirebase();
    //Support
    formTechnologyS = document.getElementById("formS");
    formTechnologyS.addEventListener("submit", enviarTechnologyAFirebaseS, false);
    tbodyTablaTechnologyS = document.getElementById("tbody-support");
    refTechnologyS = firebase.database().ref().child("Datos/Tecnologia/Border/Support");
    document.getElementById("showS").addEventListener("click", showS);
    //Corta
    formTechnologyC = document.getElementById("formC");
    formTechnologyC.addEventListener("submit", enviarTechnologyAFirebaseC, false);
    tbodyTablaTechnologyC = document.getElementById("tbody-corta");
    refTechnologyC = firebase.database().ref().child("Datos/Tecnologia/Border/Corta");
    document.getElementById("showC").addEventListener("click", showC);
    //Media 
    formTechnologyM = document.getElementById("formM");
    formTechnologyM.addEventListener("submit", enviarTechnologyAFirebaseM, false);
    tbodyTablaTechnologyM = document.getElementById("tbody-media");
    refTechnologyM = firebase.database().ref().child("Datos/Tecnologia/Border/Mediana");
    document.getElementById("showM").addEventListener("click", showM);
    //Larga
    formTechnologyL = document.getElementById("formL");
    formTechnologyL.addEventListener("submit", enviarTechnologyAFirebaseL, false);
    tbodyTablaTechnologyL = document.getElementById("tbody-larga");
    refTechnologyL = firebase.database().ref().child("Datos/Tecnologia/Border/Larga");
    document.getElementById("showL").addEventListener("click", showL);
    mostrarTechnologyDeFirebase();
}



function mostrarTechnologyDeFirebase() {
    //Support
    refTechnologyS.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-Technology="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-Technology="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaTechnologyS.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarTechnologyeDeFirebaseS)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarTechnologyeDeFirebaseS)
            }
        }
    });
    //Corta
    refTechnologyC.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-Technology="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-Technology="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaTechnologyC.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarTechnologyeDeFirebaseC)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarTechnologyeDeFirebaseC)
            }
        }
    });
    // //Media 
    refTechnologyM.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-Technology="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-Technology="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaTechnologyM.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarTechnologyeDeFirebaseM)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarTechnologyeDeFirebaseM)
            }
        }
    });
    // //Larga
    refTechnologyL.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-Technology="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-Technology="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaTechnologyL.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarTechnologyeDeFirebaseL)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarTechnologyeDeFirebaseL)
            }
        }
    });
}
//Support
function editarTechnologyeDeFirebaseS() {
    document.getElementById("formS").style.display = "block";
    document.getElementById("voidNameS").style.display = "none";
    document.getElementById("voidImagenS").style.display = "none";
    document.getElementById("voidTextoS").style.display = "none";
    var keyDeTechnologyAEditar = this.getAttribute("data-Technology");
    refDeTechnologyAEditarS = refTechnologyS.child(keyDeTechnologyAEditar);
    refDeTechnologyAEditarS.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameS").value = datos.name;
        document.getElementById("imagenS").value = datos.imagen;
        document.getElementById("textoS").value = datos.texto;
    });
    document.getElementById("boton_enviarS").value = UPDATE;
    modo = UPDATE;
}
function borrarTechnologyeDeFirebaseS() {
    var keyDeTechnologyABorrarS = this.getAttribute("data-Technology");
    var refDeTechnologyABorrarS = refTechnologyS.child(keyDeTechnologyABorrarS);
    refDeTechnologyABorrarS.remove();
}
function enviarTechnologyAFirebaseS(event) {
    if (checkFormS(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refTechnologyS.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeTechnologyAEditarS.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formTechnologyS.reset();
        document.getElementById("formS").style.display = "none";

        modo = CREATE;
    }
}
function checkFormS(event) {
    var check = [false, false, false];
    refFormulario = document.getElementById("formS");
    if (document.forms["formS"]["nameS"].value == "") {
        document.getElementById("voidNameS").style.display = "block";
        event.preventDefault();
        check[0] = false;
    } else {
        document.getElementById("voidNameS").style.display = "none";
        check[0] = true;
    }

    if (document.forms["formS"]["imagenS"].value == "") {
        document.getElementById("voidImagenS").style.display = "block";
        event.preventDefault();
        check[1] = false;
    } else {
        document.getElementById("voidImagenS").style.display = "none";
        check[1] = true;
    }

    if (document.forms["formS"]["textoS"].value == "") {
        document.getElementById("voidTextoS").style.display = "block";
        event.preventDefault();
        check[2] = false;
    } else {
        document.getElementById("voidTextoS").style.display = "none";
        check[2] = true;
    }
    for (var i = 0; i < 3; i++) {
        if (check[i] == false) {
            return false;
        }
    }
    return true;
}
function showS() {
    document.getElementById("formS").style.display = "block";
    document.getElementById("voidNameS").style.display = "none";
    document.getElementById("voidImagenS").style.display = "none";
    document.getElementById("voidTextoS").style.display = "none";
    formTechnologyS.reset();
    document.getElementById("boton_enviarS").value = CREATE;
    modo = CREATE;
}
//Corta
function editarTechnologyeDeFirebaseC() {
    document.getElementById("formC").style.display = "block";
    document.getElementById("voidNameC").style.display = "none";
    document.getElementById("voidImagenC").style.display = "none";
    document.getElementById("voidTextoC").style.display = "none";
    var keyDeTechnologyAEditar = this.getAttribute("data-Technology");
    refDeTechnologyAEditarC = refTechnologyC.child(keyDeTechnologyAEditar);
    refDeTechnologyAEditarC.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameC").value = datos.name;
        document.getElementById("imagenC").value = datos.imagen;
        document.getElementById("textoC").value = datos.texto;
    });
    document.getElementById("boton_enviarC").value = UPDATE;
    modo = UPDATE;
}
function borrarTechnologyeDeFirebaseC() {
    var keyDeTechnologyABorrarC = this.getAttribute("data-Technology");
    var refDeTechnologyABorrarC = refTechnologyC.child(keyDeTechnologyABorrarC);
    refDeTechnologyABorrarC.remove();
}
function enviarTechnologyAFirebaseC(event) {
    if (checkFormC(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refTechnologyC.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeTechnologyAEditarC.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formTechnologyC.reset();
        document.getElementById("formC").style.display = "none";

        modo = CREATE;
    }
}
function checkFormC(event) {
    var check = [false, false, false];
    refFormulario = document.getElementById("formC");
    if (document.forms["formC"]["nameC"].value == "") {
        document.getElementById("voidNameC").style.display = "block";
        event.preventDefault();
        check[0] = false;
    } else {
        document.getElementById("voidNameC").style.display = "none";
        check[0] = true;
    }

    if (document.forms["formC"]["imagenC"].value == "") {
        document.getElementById("voidImagenC").style.display = "block";
        event.preventDefault();
        check[1] = false;
    } else {
        document.getElementById("voidImagenC").style.display = "none";
        check[1] = true;
    }

    if (document.forms["formC"]["textoC"].value == "") {
        document.getElementById("voidTextoC").style.display = "block";
        event.preventDefault();
        check[2] = false;
    } else {
        document.getElementById("voidTextoC").style.display = "none";
        check[2] = true;
    }
    for (var i = 0; i < 3; i++) {
        if (check[i] == false) {
            return false;
        }
    }
    return true;
}
function showC() {
    document.getElementById("formC").style.display = "block";
    document.getElementById("voidNameC").style.display = "none";
    document.getElementById("voidImagenC").style.display = "none";
    document.getElementById("voidTextoC").style.display = "none";
    formTechnologyC.reset();
    document.getElementById("boton_enviarC").value = CREATE;
    modo = CREATE;
}
//Media
function editarTechnologyeDeFirebaseM() {
    document.getElementById("formM").style.display = "block";
    document.getElementById("voidNameM").style.display = "none";
    document.getElementById("voidImagenM").style.display = "none";
    document.getElementById("voidTextoM").style.display = "none";
    var keyDeTechnologyAEditar = this.getAttribute("data-Technology");
    refDeTechnologyAEditarM = refTechnologyM.child(keyDeTechnologyAEditar);
    refDeTechnologyAEditarM.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameM").value = datos.name;
        document.getElementById("imagenM").value = datos.imagen;
        document.getElementById("textoM").value = datos.texto;
    });
    document.getElementById("boton_enviarM").value = UPDATE;
    modo = UPDATE;
}
function borrarTechnologyeDeFirebaseM() {
    var keyDeTechnologyABorrarM = this.getAttribute("data-Technology");
    var refDeTechnologyABorrarM = refTechnologyM.child(keyDeTechnologyABorrarM);
    refDeTechnologyABorrarM.remove();
}
function enviarTechnologyAFirebaseM(event) {
    if (checkFormM(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refTechnologyM.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeTechnologyAEditarM.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formTechnologyM.reset();
        document.getElementById("formM").style.display = "none";

        modo = CREATE;
    }
}
function checkFormM(event) {
    var check = [false, false, false];
    refFormulario = document.getElementById("formM");
    if (document.forms["formM"]["nameM"].value == "") {
        document.getElementById("voidNameM").style.display = "block";
        event.preventDefault();
        check[0] = false;
    } else {
        document.getElementById("voidNameM").style.display = "none";
        check[0] = true;
    }

    if (document.forms["formM"]["imagenM"].value == "") {
        document.getElementById("voidImagenM").style.display = "block";
        event.preventDefault();
        check[1] = false;
    } else {
        document.getElementById("voidImagenM").style.display = "none";
        check[1] = true;
    }

    if (document.forms["formM"]["textoM"].value == "") {
        document.getElementById("voidTextoM").style.display = "block";
        event.preventDefault();
        check[2] = false;
    } else {
        document.getElementById("voidTextoM").style.display = "none";
        check[2] = true;
    }
    for (var i = 0; i < 3; i++) {
        if (check[i] == false) {
            return false;
        }
    }
    return true;
}
function showM() {
    document.getElementById("formM").style.display = "block";
    document.getElementById("voidNameM").style.display = "none";
    document.getElementById("voidImagenM").style.display = "none";
    document.getElementById("voidTextoM").style.display = "none";
    formTechnologyM.reset();
    document.getElementById("boton_enviarM").value = CREATE;
    modo = CREATE;
}
//Larga
function editarTechnologyeDeFirebaseL() {
    document.getElementById("formL").style.display = "block";
    document.getElementById("voidNameL").style.display = "none";
    document.getElementById("voidImagenL").style.display = "none";
    document.getElementById("voidTextoL").style.display = "none";
    var keyDeTechnologyAEditar = this.getAttribute("data-Technology");
    refDeTechnologyAEditarL = refTechnologyL.child(keyDeTechnologyAEditar);
    refDeTechnologyAEditarL.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameL").value = datos.name;
        document.getElementById("imagenL").value = datos.imagen;
        document.getElementById("textoL").value = datos.texto;
    });
    document.getElementById("boton_enviarL").value = UPDATE;
    modo = UPDATE;
}
function borrarTechnologyeDeFirebaseL() {
    var keyDeTechnologyABorrarL = this.getAttribute("data-Technology");
    var refDeTechnologyABorrarL = refTechnologyL.child(keyDeTechnologyABorrarL);
    refDeTechnologyABorrarL.remove();
}
function enviarTechnologyAFirebaseL(event) {
    if (checkFormL(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refTechnologyL.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeTechnologyAEditarL.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formTechnologyL.reset();
        document.getElementById("formL").style.display = "none";

        modo = CREATE;
    }
}
function checkFormL(event) {
    var check = [false, false, false];
    refFormulario = document.getElementById("formL");
    if (document.forms["formL"]["nameL"].value == "") {
        document.getElementById("voidNameL").style.display = "block";
        event.preventDefault();
        check[0] = false;
    } else {
        document.getElementById("voidNameL").style.display = "none";
        check[0] = true;
    }

    if (document.forms["formL"]["imagenL"].value == "") {
        document.getElementById("voidImagenL").style.display = "block";
        event.preventDefault();
        check[1] = false;
    } else {
        document.getElementById("voidImagenL").style.display = "none";
        check[1] = true;
    }

    if (document.forms["formL"]["textoL"].value == "") {
        document.getElementById("voidTextoL").style.display = "block";
        event.preventDefault();
        check[2] = false;
    } else {
        document.getElementById("voidTextoL").style.display = "none";
        check[2] = true;
    }
    for (var i = 0; i < 3; i++) {
        if (check[i] == false) {
            return false;
        }
    }
    return true;
}
function showL() {
    document.getElementById("formL").style.display = "block";
    document.getElementById("voidNameL").style.display = "none";
    document.getElementById("voidImagenL").style.display = "none";
    document.getElementById("voidTextoL").style.display = "none";
    formTechnologyL.reset();
    document.getElementById("boton_enviarL").value = CREATE;
    modo = CREATE;
}
function inicializarFirebase() {
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
