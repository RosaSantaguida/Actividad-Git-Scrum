function verificar() {
    var nombre = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    if (nombre == "" || pass == ""){
        alert("Debe completar ambos campos");
    }
    else if (nombre.includes("@")) {
        alert("Correcto, puede pasar");
    }
    else {
        alert("Falta el arroba en el usuario");
    }
}