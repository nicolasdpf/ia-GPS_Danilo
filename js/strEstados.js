]/**
 * StrEstados : estructuras de datos para los estados del problema: 
 * Capitales de colombia, ubicacion latitud y longitud en decimales simples
 * y ciudades cercanas 
 */
var Estados = [
    //0
    {ciudad : "Leticia",
    ubicacion : {lat:-3.6150525,long:-70.3169899},
    vecinos : [{ciudad: 22, distancia: 955}, {ciudad: 7, distancia: 902}, {ciudad: 30, distancia: 607}]},
    //1
    {ciudad : "Medellin",
    ubicacion : {lat: 6.2518401, long: -75.563591},
    vecinos : [{ciudad:12, distancia: 403}, {ciudad : 4, distancia: 642}, { ciudad: 26, distancia: 392}, {ciudad: 5}, { ciudad : 6}, {ciudad: 24},
        {ciudad: 11}]},
    //2
    {ciudad : "Arauca",
    ubicacion : {lat: 7.0847101, long: -70.759079},
    vecinos : [{ciudad: 5},{ciudad: 8}, {ciudad: 31}]},
    //3
    {ciudad : "Barranquilla",
    ubicacion : {lat: 10.9685402, long: -74.7813187},
    vecinos : [{ciudad: 18}, {ciudad: 4}]},
//4
    {ciudad : "Cartagena",
    ubicacion : {lat: 10.3997202, long: -75.5144424},
    vecinos : [{ciudad:27},{ciudad : 3}]},
//5
    {ciudad : "Tunja",
    ubicacion : { lat: 5.5352802, long: -73.3677826},
    vecinos : [{ciudad: 26},{ciudad: 1},{ciudad: 6}, {ciudad: 13},{ciudad: 8}, {ciudad: 2}]},
//6
    {ciudad : "Manizales",
    ubicacion : { lat: 5.0688901, long: -75.5173798},
    vecinos : [{ciudad: 1}, {ciudad: 11}, {ciudad: 24},{ciudad: 28}, {ciudad: 13}, {ciudad: 5}]},
//7
    {ciudad : "Florencia",
    ubicacion : { lat: 1.61438,	long: -75.6062317},
    vecinos : [{ciudad: 22},{ciudad: 9}, {ciudad: 16}, {ciudad: 19},
        {ciudad: 15}, {ciudad: 30}, {ciudad: 0, distancia: 902}]},
//8
    {ciudad : "Yopal",
    ubicacion : { lat: 5.33775, long: -72.3958588},
    vecinos : [{ciudad: 2},{ciudad: 31},{ciudad: 19}, {ciudad: 5}, {ciudad: 13}]},
//9
    {ciudad : "Popayan",
    ubicacion : { lat: 2.43823, long: -76.6131592},
    vecinos : [{ciudad: 29}, {ciudad: 28}, {ciudad: 16}, {ciudad: 22}, {ciudad: 20}, {ciudad: 7}]},
//10
    {ciudad : "Valledupar",
    ubicacion : { lat: 10.4631395, long: -73.2532196},
    vecinos : [{ciudad: 17}, {ciudad: 18}, {ciudad: 4}, {ciudad: 21}, {ciudad: 26}]},
//11
    {ciudad : "Quibdo",
    ubicacion : { lat: 5.6918802, long: -76.6583481},
    vecinos : [{ciudad: 1}, {ciudad: 24}, {ciudad: 29}]},
//12
    {ciudad : "Monteria",
    ubicacion : { lat: 8.7479801, long: -75.8814316},
    vecinos : [{ciudad : 1},{ciudad: 27}, {ciudad: 4}]},
//13
    {ciudad : "Bogota", 
    ubicacion : {lat: 4.6097102, long: -74.081749}, 
    vecinos:[{ciudad: 6},{ciudad: 5}, {ciudad: 8}, {ciudad:19},
        {ciudad:16}, {ciudad: 28}]
    }, 
//14
    {ciudad : "Puerto Inirida",
    ubicacion : { lat:3.8683189, long: -67.9326714 },
    vecinos : [{ciudad: 31}, {ciudad: 15}, {ciudad: 30}]},
//15
    {ciudad : "San Jose del Guaviare",
    ubicacion : { lat:2.569371, long: -72.6476268},
    vecinos : [{ciudad: 19}, {ciudad: 7}, {ciudad: 30}, {ciudad: 14}]},
//16
    {ciudad : "Neiva",
    ubicacion : { lat: 2.9273, long: -75.2818909},
    vecinos : [{ciudad: 13},{ciudad: 28}, {ciudad: 9}, {ciudad: 7},{ciudad: 19}]},
//17
    {ciudad : "Riohacha",
    ubicacion : { lat: 11.5444403, long: -72.9072189},
    vecinos : [{ciudad: 18}, {ciudad: 10}]},
//18
    {ciudad : "Santa Marta",
    ubicacion : { lat: 11.2407904, long:-74.1990433},
    vecinos : [{ciudad: 17}, {ciudad: 3}, {ciudad: 4}, {ciudad: 10}]},
//19
    {ciudad : "Villavicencio",
    ubicacion : { lat: 4.1420002, long: -73.6266403},
    vecinos : [{ciudad: 31}, {ciudad: 8}, {ciudad: 13}, {ciudad: 16}, {ciudad: 7}, {ciudad: 15}]},
//20
    {ciudad : "Pasto",
    ubicacion : { lat: 1.2136101, long: -77.2811127},
    vecinos : [{ciudad: 22}, {ciudad: 9}]},
//21
    {ciudad : "Cucuta",
    ubicacion : { lat: 7.8939099, long: -72.5078201},
    vecinos : [{ciudad: 10}, {ciudad: 26} , {ciudad: 5}, 
        {ciudad: 2}]},
//22
    {ciudad : "Mocoa",
    ubicacion : { lat: 1.14748 , long: -76.6473}, /** */
    vecinos : [{ciudad: 20}, {ciudad: 9}, {ciudad: 7},
        {ciudad: 0, distancia: 955}]},
//23
    {ciudad : "Armenia",
    ubicacion : { lat: 4.5338898, long: -75.6811066},
    vecinos : [{ciudad: 24}, {ciudad: 29}, {ciudad: 28}]},
//24
    {ciudad : "Pereira",
    ubicacion : { lat: 4.8133302, long: -75.6961136},
    vecinos : [{ciudad: 23},{ciudad: 29}, {ciudad: 11}, {ciudad: 6}, {ciudad: 28}]},
//25
    {ciudad : "San Andres",
    ubicacion : { lat: 12.5847197, long: -81.7005615},
    vecinos : []},
//26
    {ciudad : "Bucaramanga",
    ubicacion : { lat: 7.1253901, long: -73.1197968},
    vecinos : [{ciudad: 21}, {ciudad: 10}, {ciudad: 4}, {ciudad: 1}, {ciudad: 5}]},
//27
    {ciudad : "Sincelejo",
    ubicacion : { lat: 9.3047199, long:	-75.3977814},
    vecinos : [{ciudad: 12}, {ciudad: 4}]},
//28
    {ciudad : "Ibague",
    ubicacion : { lat: 4.43889, long: -75.2322235},
    vecinos : [{ciudad: 23}, {ciudad: 24}, {ciudad: 6}, {ciudad: 13}, {ciudad: 16}, {ciudad: 29} ]},
//29
    {ciudad : "Cali",
    ubicacion : { lat: 3.4372201, long: -76.5224991},
    vecinos : [{ciudad: 11}, {ciudad: 24}, {ciudad: 1}, {ciudad: 28}, {ciudad: 9}]},
//30
    {ciudad : "Mitu",
    ubicacion : { lat: 1.25509, long: -70.235}, /** */
    vecinos : [{ciudad: 0}, {ciudad: 7}, {ciudad: 15}, {ciudad: 14}]},
//31
    {ciudad: "Puerto Carreño",
    ubicacion:  {lat: 6.1890300, long: -67.4858800},
    vecinos: [{ciudad: 14}, {ciudad: 15}, {ciudad: 19}, {ciudad: 8}, {ciudad: 2}]}
];