//1
let arrayVacio = [];
//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
let arrayNumerosPares = [0, 2, 4, 6, 8];
//4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
//5
function suma(numero1, numero2) {
    return numero1 + numero2;
}
//6
function potenciacion(a, b) {
  if (b === 0) {
      return 1;
  } else if (b > 1) {
      let resultado = 1;
      for (let i = 0; i < b; i++) {
          resultado *= a;
      }
      return resultado;
    }
}

//7
function separarPalabras(texto) {
    return texto.split(" ");
  }

//8
function repetirString(str, num) {
    if (num <= 0) {
      return '';
    }
  
    let resultado = '';
    for (let i = 0; i < num; i++) {
      resultado += str;
    }
  
    return resultado;
  }
  
//9

function esPrimo(numero) {
  if(numero <= 3){
    return true;
  } else if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0 || numero % 11 === 0 || numero % 13 === 0 || numero % 17 === 0 || numero % 19 === 0 || numero % 23 === 0 || numero % 29 === 0 || numero % 31 === 0 || numero % 37 === 0 || numero % 41 === 0 || numero % 43 === 0 || numero % 47 === 0 || numero % 53 === 0 || numero % 59 === 0 || numero % 61 === 0 || numero % 67 === 0 || numero % 71 === 0 || numero % 73 === 0 || numero % 79 === 0  || numero % 83 === 0 || numero % 89 === 0 || numero % 97 === 0){
    return false;
  }else{
    return true;
  }
}

/*no funciona
Numero_primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
function esPrimo(numero) {
  cantidad = 0;
  for(x in Numero_primos){
    if(numero % x == 0){
      return false;
    }else if (numero % x !== 0){
      return true;
    }
  }
}
*/

//10
function ordenarArray(array) {

  return array.sort((a, b) => a - b);
}
//11
function obtenerPares(array) {
  return array.filter(numero => numero % 2 === 0);
}

//12



//13
function arrayMapi(array, func) {
  const newArray = array.map((primerElemento, segundoElemento) => func(primerElemento, segundoElemento));
  
  return newArray;
}

//14
function eliminarDuplicados(array) {
  const arraySinDuplicados = [...new Set(array)];
  return arraySinDuplicados;
}
 //15
 const arrayNumerosNeg = [];

for (let i = 0; i >= -9; i--) {
  arrayNumerosNeg.push(i);
}

//16
let holaMundo = ["Hola", "Mundo"];

//17
let loGuardoTodo =["hola", "que", 23, 42.33, "tal"];

//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//19
function multiplicacion(num1, num2) {
  return num1 * num2;
}

//20
function division(num1, num2) {
  return num1 / num2; 
}

//21
function esPar(num){
  if (num % 2 === 0)
    return true;
  else if (num % 2 !== 0)
    return false;
}

 //22
let arrayFunciones = [suma, resta, multiplicacion];

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function multiplicacion(num1, num2) {
  return num1 * num2;
}

//23
function ordenarArray2(array) {
  return array.sort(function(a, b) {
    return b - a;
  })
}

//24
function obtenerImpares(array) {
  return array.filter(function(numero) {
      return numero % 2 !== 0;
  });
}

//25
function sumarArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}
 //26
 function multiplicarArray(array) {
  let resultado = 1;
  for (let i = 0; i < array.length; i++) {
      resultado *= array[i];
  }
  return resultado;
}