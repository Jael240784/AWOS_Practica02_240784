//Personalizamos el separador del ejercicio 03
console.warn(" %c Ejercicio 03: Funciones ", style_console);

// 1. Funciones Procedurales, funciones vacias (VOID) o funciones sin retorno de valor

function saludar()
{
    console.log("Hola, bienvenido al Sistema de Bienes Raíces de JavaScript");
}

console.warn("1. Funciones Prodedurales ");
saludar();

// 2. Funciones Prodedurales con Parámetros de entrada, es decir, que reciben datos para funcionar

function saludarUsuarios(nombreUsuario, generoUsuario)
{
    if(generoUsuario="H")
        console.log(`Hola ${nombreUsuario}, bienvenido al Sistema de Bienes Raíces`);
    else if(generoUsuario="M")
        console.log(`Hola ${nombreUsuario}, bienvenido al Sistema de Bienes Raíces`);
    else 
        console.log(`Hola ${nombreUsuario}, bienvenido al Sistema de Bienes Raíces`);
}

console.warn("2. Funciones Prodedurales con Parámetros de entrada");
//Test 1: 
console.log("nombreUsuario: Adrian, generoUsuario: H");
saludarUsuarios("Adrian","H");
//Test 2:
console.log("nombreUsuario: Maria, generoUsuario: M");
saludarUsuarios("Maria","M");
//Test 3:
console.log("nombreUsuario: Alex, generoUsuario: null");
saludarUsuarios("Alex",null);

// 3. Funciones con Retorno de Valor

function fechaActual()
{
    const fecha = new Date(); //milisegundos 
    const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX;

}

console.warn("3. Funciones con Retorno de Valor");
let hoy = fechaActual();
console.log(fechaActual());
console.log(typeof(fechaActual()));
console.log(hoy);

//4. Funciones que retornan un valor y reciben parámetros (datos de entrada)

// 4. Funciones con Parámetros de Entrada y Retorno de Valor

function login(username, password)
{
    let userValidated = false;
    if(username == "admin" && password == "1234")
    {
        userValidated = true;
        console.log("Bienvenido usuario admin");
    }
    else if(username ==="admin" && password !="1234")
    {
        userValidated = false;
        console.log("Contraseña incorrecta");
    }
    else if (username !="admin" && password == "1234")
    {
        userValidated = false;
        console.log("Usuario incorrecto");
    }
    else if (username !="admin" && password !="1234")
    {
        userValidated = false;
        console.log("Por favor verifique el usuario y la contraseña de nuevo");
    }
    return userValidated;
}

console.warn("4. Funciones que retornan un dato y reciben parametros de entrada");

var loginStatus;

//Test 1 - Usuario y Contraseña correctos
console.log("Test 1 - usuario: admin, contraseña: 1234");
loginStatus = login("admin","1234");
console.log(`${loginStatus? "El usuario admin se ha logueado correctamente" : "Hubo un error en el login del usuario admin"}`);

//Test 2 - Usuario correcto, Contraseña incorrecta
console.log("Test 2 - usuario: admin, contraseña: 4321");
loginStatus = login("admin","4321");
console.log(`${loginStatus? "El usuario admin se ha logueado correctamente" : "Hubo un error en el login del usuario admin"}`);

//Test 3 - Usuario incorrecto, Contraseña correcta
console.log("Test 3 - usuario: user, contraseña: 1234");
loginStatus = login("user","1234");
console.log(`${loginStatus? "El usuario user se ha logueado correctamente" : "Hubo un error en el login del usuario admin"}`);

//Test 4 - Usuario y Contraseña incorrectos
console.log("Test 4 - usuario: user, contraseña: 4321");
loginStatus = login("user","4321");
console.log(`${loginStatus? "El usuario user se ha logueado correctamente" : "Hubo un error en el login del usuario admin"}`);


//5. Funcion anonima sin parametros (Versión Extendida)

isNewUser = function () {
    const hoy = new Date();
    
    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};
console.warn("5. Funciones Anónimas, sin parámetros");

console.log("Test 1- Fecha de último acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

console.log("---------------------------------")
lastLogin = new Date("2025/12/31");
console.log("Test 2- Fecha de último acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Usuario Antiguo"}`);

//6. Funcion anonima con parametros (Versión Arrow o Lambda)

const sumar = (a,b) =>{
    let resultado = a+b;
    return resultado;
}

console.warn("6. Funciones Anónimas con Parámetros")
console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);

/* Cuando la función anónima tiene solo una linea de operacion se puede usar una versión simplificada que no usa {} llaves, ni
la palabra reservada (return) */

const multiplicar = (a,b) => a*b;

console.log(`El resultado de la multiplicación de 15 * 125 es: ${multiplicar(15,125)}`);


//7. Funciones Callback (Regreso de llamada)
console.warn("7. Funciones Callback (Regreso de llamada)");
const recoverPassword = (email, callback) => {
    //Generamos el código de recuperación
    const recoveryCode = Math.floor(Math.random() * 10000 + Math.random() * 9000000); //Número aleatorio de 4 dígitos
    console.log(`
        =========================================================================================================
        Solicitud de recuperación recibida
        Correo del usuario solicitante: ${email}
        Generando el código de recuperación...
        Código de Seguridad Generado: ${recoveryCode}
        Enviando el correo al usuario...
        Correo enviado a: ${email}, con el código de recuperación: ${recoveryCode}
        =========================================================================================================
    `);

  //definiendo la respuesta del sistema
    const response = {
        status: "Ok",
        message: "Correo de recuperación enviado correctamente",
    };
    
    callback(response);
};

//Invocamos la función de callback
recoverPassword("240136@utxicotepec.edu.mx",
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });


    