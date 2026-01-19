//Estilización de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 04: Objetos ", style_console);

console.warn("1. Propiedades de un Objeto")
// Esto no es un objeto son variables independientes que no se encuentran asociadas
let propertyID = 1;
let propertyName = "Departamento en el Centro de Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso."
let propertyType = "D";   // H: House  D: Deparment T: Terrain L: Locale  W: Warehouse  C: Cabain
let propertyIsSaleable = false;   // Se vende?
let propertyIsRentable = true;    // Se renta?
let propertyPrice = 7500.00;
let propertyLat = 19.4283813;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices = ["Agua", "Luz", "Gas"];
let propertyImage = null;
let propertyOwnerID = 32412;
let propertyStatus = "Good"

console.log(`Datos de la propiedad en RENTA:`);