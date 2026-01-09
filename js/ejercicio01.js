// Personalización de salidas a Consola
const bg = "linear-gradient(45deg, rgba(86, 115, 134, 1) 0%, rgba(88, 236, 207, 1) 50%)";

const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;

console.log("%c1.- Ejercicio 01: Declaración de Variables ", style_console);


// 1. Declaración de variables utilizando el prefijo VAR
var miNombre = "Jael A.";
var misApellidos;

console.warn("Declaracion de variables  VAR");

//Utilizaremos la función console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es:", miNombre);
console.log("El valor de la variable misApellidos es:", misApellidos);
//Esto arroja un undefined dado que la variable no ha sido inicializada, es decir, no se le ha asignado un valor almacenado.

misApellidos = "Gonzalez Cruz";
//En este momento la bariable ya tiene un valor almacenado por que al imprimirlo deberá mostrar el valor asignado.
console.log("El valor de la variable misApellidos es:", misApellidos);

miNombre= " Jael A.";
console.log("Hola, ", miNombre, misApellidos);

//2. Declaraciion de variables utilizando el prefijo CONST
console.warn("--Declaracion de Variables utilizando el prefijo CONST");

/* La palabra reservada CONST nos permite a nivel memoria reservar espacio para 
almacenar datos de una constante que a diferencia de una VARIABLE esta no puede
cambiar su valor durante la ejecucion del programa de igual manera nop se pueden}
declarar constantes sin obligatoriamente inicializar, es decir asignarles un valor
especifico por ejemplo:*/

const miMatricula = "240784";

//Imprimir el valor de una constante
console.log("El valor actual de la constante miMatricula es: ", miMatricula);

// 3. Declaracion de variables utilizando el prefijo LET

/* La palbra reservada LET en JavaScript nos permite declarar variables de una 
manera muy similar a VAR con la diferencia del alcance (SCOPE) de la misma, 
es decir, aquellas variables con VAR tienen  un alcance global durante la
ejecucion y LET se limitan a funciones ciclos a bloques de codigo eliminando
los valores almacenados una vez cumplan su funcion */

var miFechaNacimiento = new Date("2006-04-11");

function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimos de la fecha del dia de hoy
    let fechaHoy = new Date();

    //Dado que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos de hemos vivido
    let milisegundosPorDia = 24*60*60*1000;

    // Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy la fecha en que nacimos para calcular los milisegundos que hemos vivido
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    //invocamos el método matemático de la funcion psio (FLOOR)
    let edad = diasVividos /365.25
    edad = Math.floor(edad);

    return edad;
}

console.warn("--El valor de las variables miFechaNacimiento es: ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log("Despues de ejecutar la funcion calcularEdad(), puedo saber que tienes: ", miEdad, " años.");

if(miEdad >= 18)
{
    var esMayordeEdad = true;
    var EsMenordeEdad = false;
}

else

{
    esMayordeEdad = false;
    var esMenordeEdad = true;
}

console.log("En base a tu edad puedo decir que el valor de esMayordeEdad es: ", esMayordeEdad ,"y el de esMenordeEdad es: ", EsMenordeEdad);

//Interpolacion de datos

//* para imprimir dtops en JavaScript, es decir mezclar informacion estatica, que no cambia con datos dinamicos que pueden cambiar durantela ejecucion 
// del programa se requiere comenzar la cadena con un backtic () y los datos que son dinamicos estan encerrados en llaves curvas {} 
// antecedidas por un signo de dolar $
console.warn("-- Interpolacion de Datos --");
console.log(`Hola , ${miNombre} ${misApellidos} se que tienes : ${miEdad} años.;  por lo que eres ${esMayordeEdad ? "mayor de edad" : "menor de edad"};`);
