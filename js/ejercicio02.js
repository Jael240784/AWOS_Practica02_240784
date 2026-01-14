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

// --- STRING ---

var fullnameOwner = "Jael A";
let nameProperty = "Hermosa Casa en la Playa de Puerto Rico";
let descriptionProperty = "Hermosa casa de 3 recámaras, 2 baños, vista al mar, ubicada en Puerto Rico, ideal para vacaciones familiares.";

var estatus = "Disponible";
let typeProperty = "C";
var addressProperty;

/* Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra aplicación, 
que no tienen un tamaño y están conformados por caracteres alfanuméricos.
, caracteres especiales como acentos o simbolos de algun idioma */

console.warn("4.- STRING (CADENA DE CARÁCTERES, PALABRAS ");

console.log(`El usuario: ${fullnameOwner}, está vendiendo o rentando la propiedad: ${nameProperty}
     que consiste en: ${descriptionProperty} actualmente está en estado: ${estatus} y es de tipo: ${typeProperty}.`);
console.log(`Las variables declaradas son del tipo:
     fullnameOwner : ${typeof (fullnameOwner)}
     nameProperty : ${typeof (nameProperty)}
     descriptionProperty : ${typeof (descriptionProperty)}
     estatus : ${typeof (estatus)}
     typeProperty : ${typeof (typeProperty)}
     addressProperty : ${typeof (addressProperty)}
     `);


     /* Existen métodos para manipular los datos del tipo STRING, como:*/
    /*El método toUpperCase que convierte todas las letras en mayúsculas*/
    console.log(`El usuario logeado es: ${usuarioLogeado.toUpperCase()}`);
    /*Por lo contrario en método toLowerCase que convierte todas las letras en minúsculas*/
    console.log(`Descripcion de la propiedad en venta: ${descriptionProperty.toLowerCase()}`);
    /*Tambien existe la propiedad que cuenta el número cáracteres que forman el texto,
    llamado length (Tamaño)*/
    console.log(`La longitud del nombre de la propiedad es de: ${nameProperty}`);
    /*Tenemos un método que nos permite hacer subcadenas o extraer la porción de la 
    palabra en base a su posicionamiento*/
    let lastName = fullnameOwner.slice(8, fullnameOwner.length);
    console.log(`El apellido del propietario es: ${lastName}`);

    /*Otra funcion util es aquella que nos permite reemplazar letras o palabras
    del texto denominado replace() */

    console.log(`Reemplazo de la para MAR por RIO, Descripción de la propiedad : ${descriptionProperty.replace("MAR", "RIO")}`);

    /* O el reemplazo de todas las ocurrencias de una letra o palabra */

    console.log(`Reemplazo de las letras A por el numero 4, Nombre de la propiedad : ${nameProperty.replaceAll("a", "4")}`);

    /* S. BIGINT (Entero de Alta precisión o alta amplitud) */
    
    console.warn("5.- BIGINT (ENTERO DE ALTA PRECISION O ALTA AMPLITUD)");
    let numeroGrande1 = 1234567890; /* 10 digitos */
    let numeroGrande2 = 12345678901234567890; /* 20 digitos */
    let numeroGrande3 = 123456789012345678901234567890; /* 30 digitos */
    let numeroGrande4 = 1234567890123456789012345678901234567890 /* 40 digitos */

    /* Imprimimos los valores de las variables y observamos que pasa */
    console.log(`Los valores y tipos de datos son:
    numeroGrande1 = ${numeroGrande1} | tipo = ${typeof numeroGrande1}
    numeroGrande2 = ${numeroGrande2} | tipo = ${typeof numeroGrande2}
    numeroGrande3 = ${numeroGrande3} | tipo = ${typeof numeroGrande3}
    numeroGrande4 = ${numeroGrande4} | tipo = ${typeof numeroGrande4}
    `);

  /* Para no perder precisión en estos números JavaScript tiene un tipo de datos especial llamado BIGINT,
    para poder almacenar el valor en este tipo de dato, solo basta con invocar el método de conversión en la
    inicialización de la variable */
    numeroGrande1 = BigInt(1234567890); /*10 Digitos */
    numeroGrande2 = BigInt(12345678901234567890); /*20 Digitos */
    numeroGrande3 = BigInt(123456789012345678901234567890); /*30 Digitos */ 
    numeroGrande4 = BigInt(1234567890123456789012345678901234567890); /*40 Digitos */  

    console.log(`Los valores y tipos de datos son:
    numeroGrande1 = ${numeroGrande1} | tipo = ${typeof numeroGrande1}
    numeroGrande2 = ${numeroGrande2} | tipo = ${typeof numeroGrande2}
    numeroGrande3 = ${numeroGrande3} | tipo = ${typeof numeroGrande3}
    numeroGrande4 = ${numeroGrande4} | tipo = ${typeof numeroGrande4}
    `);

    /* 6. SYMBOL */
    /* Es un tipo de dato a parte de almacenar el valor, almacena la dirección fisica en memoria donde se
    almacena el valor, logrando que todos los valores de cada variable siempre sean UNICOS */
    console.warn("6.- SYMBOL (Simbolos)");

    const numero1 = 3;
    const numero2 = 3.0;
    const numero3 = "3";
    const numero4 = "3.0";
    const numero5 = Symbol(3);
    const numero6 = Symbol(3.0);
    const numero7 = Symbol("3");
    const numero8 = Symbol("3.0");
    const numero9 = Symbol(3);

   console.log(`Imprimiendo los valores y tipos de datos:
        numero1, valor = ${numero1},  tipo = ${typeof (numero1)}
        numero2, valor = ${numero2},  tipo = ${typeof (numero2)}
        numero3, valor = ${numero3},  tipo = ${typeof (numero3)}
        numero4, valor = ${numero4},  tipo = ${typeof (numero4)}
        numero5, valor = ${numero5.description},  tipo = ${typeof (numero5)}
        numero6, valor = ${numero6.description},  tipo = ${typeof (numero6)}
        numero7, valor = ${numero7.description},  tipo = ${typeof (numero7)}
        numero8, valor = ${numero8.description},  tipo = ${typeof (numero8)}
    `);

  /* Realizando un par de validaciones */
    if(numero1 == numero2)
        console.log("Se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");
    if(numero1 == numero3)
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son diferentes en valor");
    if(numero1 === numero3)
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor pero diferente tipo de dato");
    if(numero1 == numero4)
        console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero4 evaluando que son diferentes en valor");
    if(numero1 === numero4)
        console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor pero diferente tipo de dato");
    if(numero1 == numero5)
        console.log("Se comparó el valor de numero1 y numero5 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero5 evaluando que son diferentes en valor ");
    if(numero5 == numero9)
        console.log("Se comparó el valor de numero5 y numero9 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero5 y numero9 evaluando que son diferentes en valor pero diferente tipo de dato");

   
    console.warn("7.- NULL (NULO)");

    let isPremiumUser;
    let isUserLoged; 
    var todayDate = new Date();
    var lastLogin = todayDate;
    let isNewUser; // El sistema sabe que es un usuario nuevo

    console.log(`Las variables del usuario son:
        isPremiumUser, valor: ${isPremiumUser} | tipo = ${typeof (isPremiumUser)}
        isUserLoged, valor: ${isUserLoged} | tipo = ${typeof (isUserLoged)}
        isNewUser, valor: ${isNewUser} | tipo = ${typeof (isNewUser)}
    `);
     
    /* Durante la navegación del usuario en la plataforma en algún punto ingresa sus credenciales y se valida en base date */    
    /* Simulando que las credenciales fueron correctas */

    
    isUserLoged = true;
    isPremiumUser = null;
    if(lastLogin == todayDate)
        isNewUser = true;
    else
        isNewUser = false; 

    
    console.log(`Las variables del usuario son:
        isPremiumUser, valor: ${isPremiumUser} | tipo = ${typeof (isPremiumUser)}
        isUserLoged, valor: ${isUserLoged} | tipo = ${typeof (isUserLoged)}
        isNewUser, valor: ${isNewUser} | tipo = ${typeof (isNewUser)}
    `);
