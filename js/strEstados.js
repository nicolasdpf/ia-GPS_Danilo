/**
 * StrEstados : estructuras de datos para los estados del problema: 
 * Capitales de colombia, ubicacion latitud y longitud en decimales simples
 * y ciudades cercanas 
 */
var Estados = [
    {ciudad : "Bogota", 
    ubicacion : {lat: 4.6097102, long: -74.081749}, 
    vecinos:[{ciudad: 7},{ciudad:6}, {ciudad: 9}, {ciudad:19}]
    },

    {ciudad : "Leticia",
    ubicacion : {lat:-3.6150525,long:-70.3169899},
    vecinos : []},

    {ciudad : "Medellin",
    ubicacion : {lat: 6.2518401, long: -75.563591},
    vecinos : []},

    {ciudad : "Arauca",
    ubicacion : {lat: 7.0847101, long: -70.759079},
    vecinos : []},

    {ciudad : "Barranquilla",
    ubicacion : {lat: 10.9685402, long: -74.7813187},
    vecinos : []},

    {ciudad : "Cartagena",
    ubicacion : {lat: 10.3997202, long: -75.5144424},
    vecinos : []},

    {ciudad : "Tunja",
    ubicacion : { lat: 5.5352802, long: -73.3677826},
    vecinos : [{ciudad: 0}]},

    {ciudad : "Manizales",
    ubicacion : { lat: 5.0688901, long: -75.5173798},
    vecinos : [{ciudad: 0}]},

    {ciudad : "Florencia",
    ubicacion : { lat: 1.61438,	long: -75.6062317},
    vecinos : []},

    {ciudad : "Yopal",
    ubicacion : { lat: 5.33775, long: -72.3958588},
    vecinos : [{ciudad: 0,}]},

    {ciudad : "Popayan",
    ubicacion : { lat: 2.43823, long: -76.6131592},
    vecinos : []},

    {ciudad : "Valledupar",
    ubicacion : { lat: 10.4631395, long: -73.2532196},
    vecinos : []},

    {ciudad : "Quibdo",
    ubicacion : { lat: 5.6918802, long: -76.6583481},
    vecinos : []},

    {ciudad : "Monteria",
    ubicacion : { lat: 8.7479801, long: -75.8814316},
    vecinos : []},

    {ciudad : "Puerto Inirida",
    ubicacion : { lat:3.8683189, long: -67.9326714 },
    vecinos : []},

    {ciudad : "San Jose del Guaviare",
    ubicacion : { lat:2.569371, long: -72.6476268},
    vecinos : []},

    {ciudad : "Neiva",
    ubicacion : { lat: 2.9273, long: -75.2818909},
    vecinos : []},

    {ciudad : "Riohacha",
    ubicacion : { lat: 11.5444403, long: -72.9072189},
    vecinos : []},

    {ciudad : "Santa Marta",
    ubicacion : { lat: 11.2407904, long:-74.1990433},
    vecinos : []},

    {ciudad : "Villavicencio",
    ubicacion : { lat: 4.1420002, long: -73.6266403},
    vecinos : [{ciudad: 0}]},

    {ciudad : "Pasto",
    ubicacion : { lat: 1.2136101, long: -77.2811127},
    vecinos : []},

    {ciudad : "Cucuta",
    ubicacion : { lat: 7.8939099, long: -72.5078201},
    vecinos : []},

    {ciudad : "Mocoa",
    ubicacion : { lat: 1.14748 , long: -76.6473}, /** */
    vecinos : []},

    {ciudad : "Armenia",
    ubicacion : { lat: 4.5338898, long: -75.6811066},
    vecinos : []},

    {ciudad : "Pereira",
    ubicacion : { lat: 4.8133302, long: -75.6961136},
    vecinos : []},

    {ciudad : "San Andres",
    ubicacion : { lat: 12.5847197, long: -81.7005615},
    vecinos : []},

    {ciudad : "Bucaramanga",
    ubicacion : { lat: 7.1253901, long: -73.1197968},
    vecinos : []},

    {ciudad : "Sincelejo",
    ubicacion : { lat: 9.3047199, long:	-75.3977814},
    vecinos : []},

    {ciudad : "Ibague",
    ubicacion : { lat: 4.43889, long: -75.2322235},
    vecinos : []},

    {ciudad : "Cali",
    ubicacion : { lat: 3.4372201, long: -76.5224991},
    vecinos : []},

    {ciudad : "Mitu",
    ubicacion : { lat: 1.25509, long: -70.235}, /** */
    vecinos : []},

    {ciudad: "Puerto Carreño",
    ubicacion:  {lat: 6.1890300, long: -67.4858800},
    vecinos: []}
];