/* Applicacion que checkea si la persona es admisible para ingresar a las fuerzas policiales*/

let nacionalidad = prompt("Ingrese su nacionalidad");

if (nacionalidad == "Argentino") {
  alert("Usted es apto para formar parte de las fuerzas policiales");
} else {
  alert("Usted no es apto para ser parte de las fuerzas policiales");
}

let edad = parseInt(prompt("Ingrese su edad"));

while (edad < 18) {
  alert("No es apto para ingresar a las fuerzas policiales");
  edad = parseInt(prompt("Por favor ingrese nuevamentes su edad"));
}

let estudios = prompt("Posee secundario completo");

if (estudios === "Si") {
  alert("Usted es apto para formar parte de las fuerzas policiales");
} else {
  alert("Usted no es apto para ser parte de las fuerzas policiales");
}
