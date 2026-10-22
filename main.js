let notaUno = 0;
let notaDos = 0;
let notaTres = 0;

function obtenerNotas() {
  console.log("Bienvenido Alumno, ingresemos las notas de los 3 exámenes para saber si aprobó");
  
  for (let i = 0; i < 3; i++) {

    if (i === 0) {
      notaUno = Number(prompt("Ingrese la nota del primer examen:"));
    } else if (i === 1) {
      notaDos = Number(prompt("Ingrese la nota del segundo examen:"));
    } else {
      notaTres = Number(prompt("Ingrese la nota del tercer examen:"));
    }
  }
}

const sumar = (numeroUno, numeroDos, numeroTres) => 
   numeroUno + numeroDos + numeroTres;
;

function calcularPromedio() {
  return sumar(notaUno, notaDos, notaTres) / 3;
}

obtenerNotas();
sumar(notaUno, notaDos, notaTres);
alert("El promedio de las notas es: " + calcularPromedio());
