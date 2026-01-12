// =========================================================================================
// CONFIGURACIÓN DE CONSOLA
// =========================================================================================
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;
const style_ejercicio = "background: #1abc9c; color:white; border-radius: 6px; padding:4px; font-weight:bold; font-size:1.0rem";

// =========================================================================================
// FUNCIONES UTILES
// =========================================================================================
function calcularEdad(fechaNacimiento) {
    const fechaHoy = new Date();
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    return Math.floor(diasVividos / 365.25);
}

// =========================================================================================
// EJERCICIO 01: DECLARACIÓN DE VARIABLES
// =========================================================================================
console.log("%c1.- Ejercicio 01: Declaración de Variables", style_console);

// --- VAR ---
console.warn("Declaración de Variables Utilizando VAR");
var miNombre = "Jael A.";
var miApellido = "Gonzalez Cruz";
console.log(`Mi nombre es: ${miNombre} ${miApellido}`);

// --- CONST ---
console.warn("Declaración de Variables Utilizando CONST");
const miMatricula = "240784";
console.log(`Mi matrícula es: ${miMatricula}`);

// --- LET ---
console.warn("Declaración de Variables Utilizando LET");
let miFechaNacimiento = new Date(2006, 4, 11);
let edadFinal = calcularEdad(miFechaNacimiento);
console.log(`Mi edad calculada es: ${edadFinal} años.`);

// --- SCOPE ---
let esMayorDeEdad = edadFinal >= 19;
let esMenorDeEdad = !esMayorDeEdad;

console.log(`En base a tu edad puedo deducir que esMayorDeEdad = ${esMayorDeEdad} y esMenorDeEdad = ${esMenorDeEdad}.`);

// --- INTERPOLACIÓN ---
console.warn("-- Interpolación de Datos --");
console.log(`Hola, ${miNombre} ${miApellido}, sé que tienes ${edadFinal} años; por lo que eres ${esMayorDeEdad ? 'mayor de edad' : 'menor de edad'}.`);

// =========================================================================================
// EJERCICIO 02: TIPOS DE DATOS
// =========================================================================================
console.log("%c2.- Ejercicio 02: Tipos de Datos", style_ejercicio);

// --- UNDEFINED ---
console.warn("1.- UNDEFINED (No Definido)");
let usuarioLogeado;
let rolUsuario;
let ultimoAcceso;

console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

console.log(`usuarioLogeado = ${typeof usuarioLogeado}`);
console.log(`rolUsuario = ${typeof rolUsuario}`);
console.log(`ultimoAcceso = ${typeof ultimoAcceso}`);

usuarioLogeado = "Jael240784";
console.log(`usuarioLogeado = ${usuarioLogeado} | tipo = ${typeof usuarioLogeado}`);

// --- BOOLEAN ---
console.warn("2.- BOOLEAN (TRUE/FALSE)");
let hayUsuarioLogeado;

function validacionUsuarioLogeado() {
    console.log(`hayUsuarioLogeado = ${hayUsuarioLogeado}, tipo = ${typeof hayUsuarioLogeado}`);
    if (hayUsuarioLogeado === true) {
        console.log("La app mostrará el menú de usuario");
    } else if (hayUsuarioLogeado === false) {
        console.log("La app no mostrará el menú de usuario");
    } else {
        console.log("No puedo procesar este tipo de dato");
    }
}

console.log("Test 1");
hayUsuarioLogeado = true;
validacionUsuarioLogeado();

console.log("Test 2");
hayUsuarioLogeado = false;
validacionUsuarioLogeado();

console.log("Test 3");
hayUsuarioLogeado = 52.5;
validacionUsuarioLogeado();

// --- NUMBER ---
console.warn("3.- NUMBER (NUMÉRICOS)");
let userID_Owner = 225;
let priceProperty = 125000.5;
let latGPS = 20.240508;
let longGPS = -97.952881;
let altGPS = 1180;

console.log(`ID Usuario: ${userID_Owner}`);
console.log(`Precio: ${priceProperty}`);
console.log(`Latitud: ${latGPS}`);
console.log(`Longitud: ${longGPS}`);
console.log(`Altitud: ${altGPS}`);

console.log(`Tipo ID Usuario: ${typeof userID_Owner}`);
console.log(`Tipo Precio: ${typeof priceProperty}`);
console.log(`Tipo Latitud: ${typeof latGPS}`);
console.log(`Tipo Longitud: ${typeof longGPS}`);
console.log(`Tipo Altitud: ${typeof altGPS}`);