document.getElementById("name").addEventListener("click", registrar);

function registrar() {
  let aNuevaPersona = [],
    nombre = "",
    email = "",
    pass = "";

  nombre = document.getElementById("name").value;
  email = document.getElementById("email").value;
  pass = document.getElementById("password").value;

  console.log("nombre es " + nombre);
  console.log("email es " + email);
  console.log("contraseña es " + pass);

  aNuevaPersona.push(nombre, email, pass);
}
