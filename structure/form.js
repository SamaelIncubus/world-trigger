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

    refFormulario = document.getElementById("formID");
    refFormulario.addEventListener("submit", validateForm);

    refTbody = document.getElementById("tbody_form");
    refDatabase = firebase.database().ref().child("Datos/Formularios");
    document.getElementById("show").addEventListener("click", show);

    file = document.getElementById("fichero").addEventListener("change", showImagen);

    mostrarDatabases();
}
// function auth() {
// 	refDatabase.onAuthStateChanged(function (user) {
// 		if (user) {
// 			if (user.uid == "KXkEZMZplMhj7XfbDkX3MytD5cP2") {
// 				document.getElementById("crud").style.display = "block";
// 			}
// 		}
// 	});
// }
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
                + '<td> <img class="img-thumbnail" src="' + datos[key].url + '" alt="imagenFirebase"/> </td>'
                + '<td>'
                + '<button class="btn btn-info editar" data-Technology="' + key + '">'
                + '<span class="fa fa-paint-brush"></span>'
                + '</button>'
                + '</td>'
                + '<td>'
                + '<button class="btn btn-danger borrar" data-Technology="' + key + '">'
                + '<span class="fa fa-times"></span>'
                + '</button>'
                + '</td>'
                + '</tr>';
        }
        refTbody.innerHTML = filasAMostrar;
        if (filasAMostrar != "") {
            var elementosEditables = document.getElementsByClassName("editar");
            for (var i = 0; i < elementosEditables.length; i++) {
                elementosEditables[i].addEventListener("click", editarDato)
            }
            var elementosBorrables = document.getElementsByClassName("borrar");
            for (var i = 0; i < elementosBorrables.length; i++) {
                elementosBorrables[i].addEventListener("click", borrarDato)
            }
        }
    });
}
function editarDato() {
    document.getElementById("formID").style.display = "block";
    resetError();
    document.getElementById("image-firebase").style.display = "block";
    var keyDatoModified = this.getAttribute("data-Technology");
    refDatoModified = refDatabase.child(keyDatoModified);

    refDatoModified.once("value", function (snap) {
        var datos = snap.val();
        urlImageFirebase = datos.url;
        nameImageFirebase = datos.fileName;

        document.getElementById("name").value = datos.name;
        document.getElementById("firstSurname").value = datos.apellido;
        document.getElementById("secondSurname").value = datos.segundoApellido;
        if (datos.genero == "Hombre") {
            document.getElementById("male").checked = true;
        } else { document.getElementById("female").checked = true; }
        if (datos.pregunta1 == true) { document.getElementById("1").checked = true; }
        if (datos.pregunta2 == true) { document.getElementById("2").checked = true; }
        if (datos.pregunta3 == true) { document.getElementById("3").checked = true; }
        if (datos.pregunta4 == true) { document.getElementById("4").checked = true; }
        document.getElementById("rol").value = datos.rol;
        document.getElementById("character").value = datos.main;
        document.getElementById("notePage").value = datos.page;
        document.getElementById("note").value = datos.anime;
        var urlFirebase = datos.url;
        var editarImagen = "<img class='img-thumbnail' src=" + urlFirebase + " alt='imagenFirebase'/>";
        document.getElementById("image-firebase").innerHTML = editarImagen;
    });
    document.getElementById("submit").value = UPDATE;
    modo = UPDATE;
}
function borrarDato() {
    var keyDatosBorrar = this.getAttribute("data-Technology");
    var refDeDatosBorrar = refDatabase.child(keyDatosBorrar);
    var imagenABorrar;
    refDeDatosBorrar.once("value", function (snap) {
        var datos = snap.val();
        imagenABorrar = datos.fileName;
    });
    var imageDelete = firebase.storage().ref().child("images/" + imagenABorrar);
    // Delete the file
    imageDelete.delete().then(function () {
        // File deleted successfully
    }).catch(function (error) {
        // Uh-oh, an error occurred!
    });

    refDeDatosBorrar.remove();
}
function almacenarTabla(event, url, nameImagen) {
    event.preventDefault();
    switch (modo) {
        case CREATE:
            refDatabase.push({
                name: event.target.name.value,
                apellido: event.target.firstSurname.value,
                segundoApellido: event.target.secondSurname.value,
                pregunta1: document.forms["myForm"]["web"].checked,
                pregunta2: document.forms["myForm"]["webFunction"].checked,
                pregunta3: document.forms["myForm"]["learn"].checked,
                pregunta4: document.forms["myForm"]["worldTrigger"].checked,
                page: event.target.notePage.value,
                rol: event.target.rol.value,
                anime: event.target.note.value,
                fileName: nameImagen,
                url: url,
                genero: event.target.gender.value,
                main: event.target.character.value
            });
            break;
        case UPDATE:
            if (newImage) {
                refDatoModified.update({
                    name: event.target.name.value,
                    apellido: event.target.firstSurname.value,
                    segundoApellido: event.target.secondSurname.value,
                    pregunta1: document.forms["myForm"]["web"].checked,
                    pregunta2: document.forms["myForm"]["webFunction"].checked,
                    pregunta3: document.forms["myForm"]["learn"].checked,
                    pregunta4: document.forms["myForm"]["worldTrigger"].checked,
                    page: event.target.notePage.value,
                    rol: event.target.rol.value,
                    anime: event.target.note.value,
                    fileName: nameImagen,
                    url: url,
                    genero: event.target.gender.value,
                    main: event.target.character.value
                });
                var imageDelete = firebase.storage().ref().child("images/" + nameImageFirebase);
                // Delete the file
                imageDelete.delete().then(function () {
                    // File deleted successfully

                }).catch(function (error) {
                    // Uh-oh, an error occurred!

                });

            } else {
                refDatoModified.update({
                    name: event.target.name.value,
                    apellido: event.target.firstSurname.value,
                    segundoApellido: event.target.secondSurname.value,
                    pregunta1: document.forms["myForm"]["web"].checked,
                    pregunta2: document.forms["myForm"]["webFunction"].checked,
                    pregunta3: document.forms["myForm"]["learn"].checked,
                    pregunta4: document.forms["myForm"]["worldTrigger"].checked,
                    page: event.target.notePage.value,
                    rol: event.target.rol.value,
                    anime: event.target.note.value,
                    fileName: nameImageFirebase,
                    url: urlImageFirebase,
                    genero: event.target.gender.value,
                    main: event.target.character.value
                });
            }
            break;
    }
    refFormulario.reset();
    document.getElementById("formID").style.display = "none";

    modo = CREATE;

}
function show() {
    document.getElementById("formID").style.display = "block";
    resetError();
    refFormulario.reset();
    document.getElementById("submit").value = CREATE;
    modo = CREATE;
}
function validateForm(event) {
    event.preventDefault();
    var check = true;
    newImage = true;
    if (document.forms["myForm"]["name"].value == "") {
        document.getElementById("voidName").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidName").style.display = "none";
    }

    if (document.forms["myForm"]["firstSurname"].value == "") {
        document.getElementById("voidFirstSurname").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidFirstSurname").style.display = "none";
    }

    if (document.forms["myForm"]["secondSurname"].value == "") {
        document.getElementById("voidSecondSurname").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidSecondSurname").style.display = "none";
    }

    if (document.forms["myForm"]["gender"].value == "") {
        document.getElementById("voidGender").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidGender").style.display = "none";
    }

    if (document.forms["myForm"]["rol"].value == "") {
        document.getElementById("voidRol").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidRol").style.display = "none";
    }

    if (document.forms["myForm"]["character"].value == "") {
        document.getElementById("voidMain").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidMain").style.display = "none";
    }

    if (document.forms["myForm"]["notePage"].value == "") {
        document.getElementById("voidNote").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidNote").style.display = "none";
        var x = document.getElementById("notePage").value;
        if (isNaN(x) || x < 0 || x > 10) {
            document.getElementById("invalidateNote").style.display = "block";

            check = false;
        } else {
            document.getElementById("invalidateNote").style.display = "none";
        }
    }

    if (document.forms["myForm"]["note"].value == "") {
        document.getElementById("voidAnime").style.display = "block";

        check = false;
    } else {
        document.getElementById("voidAnime").style.display = "none";
        var x = document.getElementById("note").value;
        if (isNaN(x) || x < 0 || x > 10) {
            document.getElementById("invalidateAnime").style.display = "block";

            check = false;
        } else {
            document.getElementById("invalidateAnime").style.display = "none";
        }
    }
    if (document.getElementById("fichero").value == "") {
        newImage = false;
    }
    if (check && newImage) {
        enviarImagen(event);

    } else {
        almacenarTabla(event);
    }
}
function resetError() {
    document.getElementById("voidName").style.display = "none";
    document.getElementById("voidFirstSurname").style.display = "none";
    document.getElementById("voidSecondSurname").style.display = "none";
    document.getElementById("voidGender").style.display = "none";
    document.getElementById("voidRol").style.display = "none";
    document.getElementById("voidMain").style.display = "none";
    document.getElementById("voidNote").style.display = "none";
    document.getElementById("invalidateNote").style.display = "none";
    document.getElementById("voidAnime").style.display = "none";
    document.getElementById("invalidateAnime").style.display = "none";
    document.getElementById("uploadImagen").style.display = "none";
    document.getElementById("image-firebase").style.display = "none";
}
function showImagen(event) {
    document.getElementById("uploadImagen").style.display = "block";
    var photo = "<img class='img-thumdnail' src='' alt='Error 404 File not Found' id='showPhoto'/>";
    document.getElementById("uploadImagen").innerHTML = photo;
    var inputImagen = event.target;
    if (inputImagen.files && inputImagen.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("showPhoto").src = e.target.result;
        };
        reader.readAsDataURL(inputImagen.files[0]);
        file = inputImagen.files[0];
    }
    document.getElementById("image-firebase").style.display = "none";
}
function enviarImagen(event) {
    event.preventDefault();
    var nameImagen = file.name;
    //FireBase
    var uploadTask = firebase.storage().ref().child("images/" + nameImagen).put(file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        // Handle unsuccessful uploads

    }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            almacenarTabla(event, downloadURL, nameImagen);
        });
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