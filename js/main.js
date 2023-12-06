function validarUsuario(){

    const usuario="natsy.dias@istpet.edu.ec";
    const contrasenia="1234";

    const usuarioIngresa= dcoument.getElementById("user");
    const contraseniaIngresa=document.getElementsByClassName("password");
    if(usuario===usuarioIngresa && contrasenia === contraseniaIngresa){
        alert("Usuario inicia sesión con éxito");
    } else{
        alert("Usuario o contraseña incorrecta");
    }

}
function leerJson(){
    fetch('data/usuario.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
        console.log(data[0].title);
        }
    });

}