window.onload = initializeForm;

function initializeForm(){
   document.getElementById("formID").addEventListener("submit", validateForm);
}
function validateForm() {
    if (document.forms["myForm"]["name"].value == "") {
        document.getElementById("voidName").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidName").style.display = "none";
    }

    if (document.forms["myForm"]["firstSurname"].value == "") {
        document.getElementById("voidFirstSurname").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidFirstSurname").style.display = "none";
    }

    if (document.forms["myForm"]["secondSurname"].value == "") {
        document.getElementById("voidSecondSurname").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidSecondSurname").style.display = "none";
    }

    if (document.forms["myForm"]["gender"].value == "") {
        document.getElementById("voidGender").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidGender").style.display = "none";
    }

    if (document.forms["myForm"]["rol"].value == "") {
        document.getElementById("voidRol").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidRol").style.display = "none";
    }

    if (document.forms["myForm"]["character"].value == "") {
        document.getElementById("voidMain").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidMain").style.display = "none";
    }

    if (document.forms["myForm"]["notePage"].value == "") {
        document.getElementById("voidNote").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidNote").style.display = "none";
        var x= document.getElementById("notePage").value;
        if (isNaN(x) || x < 0 || x > 10) {
            document.getElementById("invalidateNote").style.display = "block";
            event.preventDefault();
        }else{
            document.getElementById("invalidateNote").style.display = "none";
        }
    }

    if (document.forms["myForm"]["note"].value == "") {
        document.getElementById("voidAnime").style.display = "block";
        event.preventDefault();
    }else{
        document.getElementById("voidAnime").style.display = "none";
        var x= document.getElementById("note").value;
        if (isNaN(x) || x < 0 || x > 10) {
            document.getElementById("invalidateAnime").style.display = "block";
            event.preventDefault();
        }else{
            document.getElementById("invalidateAnime").style.display = "none";
        }
    }

        
}
