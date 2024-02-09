function mostrarFactorial(numero) {
  if (isNaN(numero)) {
    console.error("¡Sólo puedes ingresar números!");
    return;
  }

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;

}

let numDigitado = prompt("Por favor ingresa un número: ");
let numero = parseInt(numDigitado);
let factorial = mostrarFactorial(numero);

if (factorial !== undefined) {
  document.write(`El factorial de ${numero} es ${factorial}`);
} else {
  alert("No es posible obtener un resultado.");
}
