



//Ejercicio 1: Realice una función que sume 2 números y me imprima el resultado
function sumar(num1,num2){
    let resultado = num1 + num2;
    console.log("El resultado de la suma es ", resultado);
  }
  sumar(2,3)
  

  //Ejercicio 2: Realice una función que me diga si un numero es par o no es par
  function par(num){
    let division = num / 2;
    if(Number.isInteger(division)) console.log("El numero es par");
    else console.log("El numero es impar");
  }
  par(238)
  

  //Ejercicio 3: Realice una función que me diga si la edad de la persona es suficiente para ingresar a un bar
  function ingresoBar(edad){
    if(edad >= 18) console.log("Si puede entrar");
    else console.log("No puede entrar");
  }
  ingresoBar(19)
  
  
//Ejercicio 4: Tarea 1 2 Realice una función que me imprima todos los elementos de un array sin importar la cantidad de elementos de un array
  function mostrarElementos(...theArgs){
    console.log(theArgs);
  }
  mostrarElementos(1,2,3,4,5,6,7,8,9)


//Ejercicio extra 1: Realice una función que me ordene los elementos numéricos de un array
  function mostrarElementos(...theArgs){
    theArgs.sort();
    console.log(theArgs);
  }
  mostrarElementos(3,2,5,1,7,9,8,6)


  //Ejercicio extra 2: Realice una función que me diga si un string es palindromo
  function Palindrome(texto) {
    let valores = texto.split("");
    let girarValores = valores.reverse();
    let textoGirado = girarValores.join("");
    if(texto == textoGirado) console.log("Si es palindromo");
    else console.log("No es palindromo" );
    }
    Palindrome("pizza")