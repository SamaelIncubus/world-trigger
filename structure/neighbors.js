window.onload = inicializar;
//Support
var formConvalidacionesS;
var refConvalidacionesS;
var tbodyTablaConvalidacionesS;
var refDeConvalidacionAEditarS;

//Corta
var formConvalidacionesC;
var refConvalidacionesC;
var tbodyTablaConvalidacionesC;
var refDeConvalidacionAEditarC;

//Media 
var formConvalidacionesM;
var refConvalidacionesM;
var tbodyTablaConvalidacionesM;
var refDeConvalidacionAEditarM;

//Larga
var formConvalidacionesL;
var refConvalidacionesL;
var tbodyTablaConvalidacionesL;
var refDeConvalidacionAEditarL;

//buttons
var CREATE = "Añadir Convalidación";
var UPDATE = "Modificar Convalidación";
var modo = CREATE;


function inicializar() {
    inicializarFirebase();
    //Support
    formConvalidacionesS = document.getElementById("formS");
    formConvalidacionesS.addEventListener("submit", enviarConvalidacionesAFirebaseS, false);
    tbodyTablaConvalidacionesS = document.getElementById("tbody-support");
    refConvalidacionesS = firebase.database().ref().child("Datos/Tecnologia/Neighbors/Support");
    document.getElementById("showS").addEventListener("click", showS);
    //Corta
    formConvalidacionesC = document.getElementById("formC");
    formConvalidacionesC.addEventListener("submit", enviarConvalidacionesAFirebaseC, false);
    tbodyTablaConvalidacionesC = document.getElementById("tbody-corta");
    refConvalidacionesC = firebase.database().ref().child("Datos/Tecnologia/Neighbors/Corta");
    document.getElementById("showC").addEventListener("click", showC);
    //Media 
    formConvalidacionesM = document.getElementById("formM");
    formConvalidacionesM.addEventListener("submit", enviarConvalidacionesAFirebaseM, false);
    tbodyTablaConvalidacionesM = document.getElementById("tbody-media");
    refConvalidacionesM = firebase.database().ref().child("Datos/Tecnologia/Neighbors/Mediana");
    document.getElementById("showM").addEventListener("click", showM);
    //Larga
    formConvalidacionesL = document.getElementById("formL");
    formConvalidacionesL.addEventListener("submit", enviarConvalidacionesAFirebaseL, false);
    tbodyTablaConvalidacionesL = document.getElementById("tbody-larga");
    refConvalidacionesL = firebase.database().ref().child("Datos/Tecnologia/Neighbors/Larga");
    document.getElementById("showL").addEventListener("click", showL);
    mostrarConvalidacionesDeFirebase();
}



function mostrarConvalidacionesDeFirebase() {
    //Support
    refConvalidacionesS.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaConvalidacionesS.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarConvalidacioneDeFirebaseS)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarConvalidacioneDeFirebaseS)
            }
        }
    });
    //Corta
    refConvalidacionesC.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaConvalidacionesC.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarConvalidacioneDeFirebaseC)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarConvalidacioneDeFirebaseC)
            }
        }
    });
    // //Media 
    refConvalidacionesM.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaConvalidacionesM.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarConvalidacioneDeFirebaseM)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarConvalidacioneDeFirebaseM)
            }
        }
    });
    // //Larga
    refConvalidacionesL.on("value", function (snap) {
        var datos = snap.val();
        var filasAMostrar = '';
        for (var key in datos) {
            filasAMostrar +=
                '<tr>'
                + '<td>' + '<strong>' + datos[key].name + '</strong>' + '</td>'
                + '<td>' + '<img src=' + datos[key].imagen + ' alt="Error 404: Image Not Found" class="img-fluid">' + '</td>'
                + '<td class="left">' + datos[key].texto + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-info editar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td class="crud">'
                + '<button class="btn btn-danger borrar" data-convalidacion="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        tbodyTablaConvalidacionesL.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarConvalidacioneDeFirebaseL)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarConvalidacioneDeFirebaseL)
            }
        }
    });
}
//Support
function editarConvalidacioneDeFirebaseS() {
    document.getElementById("formS").style.display = "block";
    document.getElementById("voidNameS").style.display = "none";
    document.getElementById("voidImagenS").style.display = "none";
    document.getElementById("voidTextoS").style.display = "none";
    var keyDeConvalidacionAEditar = this.getAttribute("data-convalidacion");
    refDeConvalidacionAEditarS = refConvalidacionesS.child(keyDeConvalidacionAEditar);
    refDeConvalidacionAEditarS.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameS").value = datos.name;
        document.getElementById("imagenS").value = datos.imagen;
        document.getElementById("textoS").value = datos.texto;
    });
    document.getElementById("boton_enviarS").value = UPDATE;
    modo = UPDATE;
}
function borrarConvalidacioneDeFirebaseS() {
    var keyDeConvalidacionABorrarS = this.getAttribute("data-convalidacion");
    var refDeConvalidacionABorrarS = refConvalidacionesS.child(keyDeConvalidacionABorrarS);
    refDeConvalidacionABorrarS.remove();
}
function enviarConvalidacionesAFirebaseS(event) {
    if (checkFormS(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refConvalidacionesS.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeConvalidacionAEditarS.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formConvalidacionesS.reset();
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
    formConvalidacionesS.reset();
    document.getElementById("boton_enviarS").value = CREATE;
    modo = CREATE;
}
//Corta
function editarConvalidacioneDeFirebaseC() {
    document.getElementById("formC").style.display = "block";
    document.getElementById("voidNameC").style.display = "none";
    document.getElementById("voidImagenC").style.display = "none";
    document.getElementById("voidTextoC").style.display = "none";
    var keyDeConvalidacionAEditar = this.getAttribute("data-convalidacion");
    refDeConvalidacionAEditarC = refConvalidacionesC.child(keyDeConvalidacionAEditar);
    refDeConvalidacionAEditarC.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameC").value = datos.name;
        document.getElementById("imagenC").value = datos.imagen;
        document.getElementById("textoC").value = datos.texto;
    });
    document.getElementById("boton_enviarC").value = UPDATE;
    modo = UPDATE;
}
function borrarConvalidacioneDeFirebaseC() {
    var keyDeConvalidacionABorrarC = this.getAttribute("data-convalidacion");
    var refDeConvalidacionABorrarC = refConvalidacionesC.child(keyDeConvalidacionABorrarC);
    refDeConvalidacionABorrarC.remove();
}
function enviarConvalidacionesAFirebaseC(event) {
    if (checkFormC(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refConvalidacionesC.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeConvalidacionAEditarC.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formConvalidacionesC.reset();
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
    formConvalidacionesC.reset();
    document.getElementById("boton_enviarC").value = CREATE;
    modo = CREATE;
}
//Media
function editarConvalidacioneDeFirebaseM() {
    document.getElementById("formM").style.display = "block";
    document.getElementById("voidNameM").style.display = "none";
    document.getElementById("voidImagenM").style.display = "none";
    document.getElementById("voidTextoM").style.display = "none";
    var keyDeConvalidacionAEditar = this.getAttribute("data-convalidacion");
    refDeConvalidacionAEditarM = refConvalidacionesM.child(keyDeConvalidacionAEditar);
    refDeConvalidacionAEditarM.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameM").value = datos.name;
        document.getElementById("imagenM").value = datos.imagen;
        document.getElementById("textoM").value = datos.texto;
    });
    document.getElementById("boton_enviarM").value = UPDATE;
    modo = UPDATE;
}
function borrarConvalidacioneDeFirebaseM() {
    var keyDeConvalidacionABorrarM = this.getAttribute("data-convalidacion");
    var refDeConvalidacionABorrarM = refConvalidacionesM.child(keyDeConvalidacionABorrarM);
    refDeConvalidacionABorrarM.remove();
}
function enviarConvalidacionesAFirebaseM(event) {
    if (checkFormM(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refConvalidacionesM.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeConvalidacionAEditarM.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formConvalidacionesM.reset();
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
    formConvalidacionesM.reset();
    document.getElementById("boton_enviarM").value = CREATE;
    modo = CREATE;
}
//Larga
function editarConvalidacioneDeFirebaseL() {
    document.getElementById("formL").style.display = "block";
    document.getElementById("voidNameL").style.display = "none";
    document.getElementById("voidImagenL").style.display = "none";
    document.getElementById("voidTextoL").style.display = "none";
    var keyDeConvalidacionAEditar = this.getAttribute("data-convalidacion");
    refDeConvalidacionAEditarL = refConvalidacionesL.child(keyDeConvalidacionAEditar);
    refDeConvalidacionAEditarL.once("value", function (snap) {
        var datos = snap.val();
        document.getElementById("nameL").value = datos.name;
        document.getElementById("imagenL").value = datos.imagen;
        document.getElementById("textoL").value = datos.texto;
    });
    document.getElementById("boton_enviarL").value = UPDATE;
    modo = UPDATE;
}
function borrarConvalidacioneDeFirebaseL() {
    var keyDeConvalidacionABorrarL = this.getAttribute("data-convalidacion");
    var refDeConvalidacionABorrarL = refConvalidacionesL.child(keyDeConvalidacionABorrarL);
    refDeConvalidacionABorrarL.remove();
}
function enviarConvalidacionesAFirebaseL(event) {
    if (checkFormL(event)) {
        event.preventDefault();
        switch (modo) {
            case CREATE:
                refConvalidacionesL.push({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
            case UPDATE:
                refDeConvalidacionAEditarL.update({
                    name: event.target.name.value,
                    imagen: event.target.imagen.value,
                    texto: event.target.texto.value,
                });
                break;
        }
        formConvalidacionesL.reset();
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
    formConvalidacionesL.reset();
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
