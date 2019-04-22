/**
 * StrEstados : estructuras de datos para los estados del problema: 
 * Capitales de colombia, ubicacion latitud y longitud en decimales simples
 * y ciudades cercanas 
 */

var Estados = [
//0
    {ciudad : "Leticia",
    ubicacion : {lat:-3.6150525,lng:-70.3169899},
    vecinos : [{ciudad: 22, distancia: 955}, {ciudad: 7, distancia: 902}, {ciudad: 30, distancia: 607}]},
//1
    {ciudad : "Medellin",
    ubicacion : {lat: 6.2518401, lng: -75.563591},
    vecinos : [{ciudad:12, distancia: 403}, {ciudad : 4, distancia: 642}, { ciudad: 26, distancia: 392}, {ciudad: 5, distancia: 427 },
         { ciudad : 6, distancia: 192}, {ciudad: 24, distancia: 213},{ciudad: 11, distancia: 229}]},
//2
    {ciudad : "Arauca",
    ubicacion : {lat: 7.0847101, lng: -70.759079},
    vecinos : [{ciudad: 5, distancia: 479},{ciudad: 8, distancia: 422}, {ciudad: 31, distancia: 375}]},
//3
    {ciudad : "Barranquilla",
    ubicacion : {lat: 10.9685402, lng: -74.7813187},
    vecinos : [{ciudad: 18, distancia: 106}, {ciudad: 4, distancia: 119}]},
//4
    {ciudad : "Cartagena",
    ubicacion : {lat: 10.3997202, lng: -75.5144424},
    vecinos : [{ciudad:27, distancia: 162},{ciudad : 3, distancia: 119}, {ciudad: 1, distancia: 642}, {ciudad: 12, distancia: 278},
        {ciudad: 26, distancia: 644}, {ciudad: 10, distancia: 360}, {ciudad: 18, distancia: 227}
    ]},
//5
    {ciudad : "Tunja",
    ubicacion : { lat: 5.5352802, lng: -73.3677826},
    vecinos : [{ciudad: 26, distancia: 283},{ciudad: 1, distancia: 427},{ciudad: 6, distancia: 420},
         {ciudad: 13, distancia: 141}, {ciudad: 8, distancia: 218}, {ciudad: 2, distancia: 479}, {ciudad: 21, distancia: 407}]},
//6
    {ciudad : "Manizales",
    ubicacion : { lat: 5.0688901, lng: -75.5173798},
    vecinos : [{ciudad: 1, distancia: 192}, {ciudad: 24, distancia: 51} ,{ciudad: 28, distancia: 176}, 
        {ciudad: 13, distancia: 294}, {ciudad: 5, distancia: 420}]},
//7
    {ciudad : "Florencia",
    ubicacion : { lat: 1.61438,	ng: -75.6062317},
    vecinos : [{ciudad: 22, distancia: 136},{ciudad: 9, distancia: 145}, {ciudad: 16, distancia: 244}, {ciudad: 19, distancia: 634},
        {ciudad: 15, distancia: 345}, {ciudad: 30, distancia: 606}, {ciudad: 0, distancia: 902}]},
//8
    {ciudad : "Yopal",
    ubicacion : { lat: 5.33775, lng: -72.3958588},
    vecinos : [{ciudad: 2, distancia: 422}, {ciudad: 31, distancia: 977}, {ciudad: 19, distancia: 262}, 
        {ciudad: 5, distancia: 218}, {ciudad: 13, distancia: 327}]},
//9
    {ciudad : "Popayan",
    ubicacion : { lat: 2.43823, lng: -76.6131592},
    vecinos : [{ciudad: 29, distancia: 138}, {ciudad: 28, distancia: 399}, {ciudad: 16, distancia: 266}, {ciudad: 22, distancia: 349},
         {ciudad: 20, distancia: 246}, {ciudad: 7, distancia: 145}]},
//10
    {ciudad : "Valledupar",
    ubicacion : { lat: 10.4631395, lng: -73.2532196},
    vecinos : [{ciudad: 17, distancia: 159}, {ciudad: 18, distancia: 254}, {ciudad: 4, distancia: 360}, 
        {ciudad: 21, distancia: 523}, {ciudad: 26, distancia: 449}]},
//11
    {ciudad : "Quibdo",
    ubicacion : { lat: 5.6918802, lng: -76.6583481},
    vecinos : [{ciudad: 1, distancia: 229}, {ciudad: 24, distancia: 213}, {ciudad: 29, distancia: 389}]},
//12
    {ciudad : "Monteria",
    ubicacion : { lat: 8.7479801, lng: -75.8814316},
    vecinos : [{ciudad : 1, distancia: 403}, {ciudad: 27, distancia: 118}, {ciudad: 4, distancia: 278}]},
//13
    {ciudad : "Bogota", 
    ubicacion : {lat: 4.6097102, lng: -74.081749}, 
    vecinos:[{ciudad: 6, distancia: 294}, {ciudad: 5, distancia: 141}, {ciudad: 8, distancia: 327}, {ciudad:19, distancia: 121},
        {ciudad:16, distancia: 310}, {ciudad: 28, distancia: 201}]
    }, 
//14
    {ciudad : "Puerto Inirida",
    ubicacion : { lat:3.8683189, lng: -67.9326714 },
    vecinos : [{ciudad: 31, distancia: 262}, {ciudad: 15, distancia: 543}, {ciudad: 30, distancia: 388}]},
//15
    {ciudad : "San Jose del Guaviare",
    ubicacion : { lat:2.569371, lng: -72.6476268},
    vecinos : [{ciudad: 19, distancia: 286}, {ciudad: 7, distancia: 345}, {ciudad: 30, distancia: 305}, 
        {ciudad: 14, distancia: 543}, {ciudad: 31 ,distancia:1131}]},
//16
    {ciudad : "Neiva",
    ubicacion : { lat: 2.9273, lng: -75.2818909},
    vecinos : [{ciudad: 13, distancia: 310},{ciudad: 28, distancia: 213}, {ciudad: 9, distancia: 266}, 
         {ciudad: 7, distancia: 244},{ciudad: 19, distancia: 398}]},
//17
    {ciudad : "Riohacha",
    ubicacion : { lat: 11.5444403, lng: -72.9072189},
    vecinos : [{ciudad: 18, distancia: 172}, {ciudad: 10, distancia: 159}]},
//18
    {ciudad : "Santa Marta",
    ubicacion : { lat: 11.2407904, lng:-74.1990433},
    vecinos : [{ciudad: 17, distancia: 172}, {ciudad: 3, distancia: 106}, {ciudad: 4, distancia: 227}, {ciudad: 10, distancia: 254}]},
//19
    {ciudad : "Villavicencio",
    ubicacion : { lat: 4.1420002, lng: -73.6266403},
    vecinos : [{ciudad: 31, distancia: 853 }, {ciudad: 8, distancia: 262}, {ciudad: 13, distancia: 121}, {ciudad: 16, distancia: 398}, 
        {ciudad: 7, distancia: 634}, {ciudad: 15, distancia: 286}]},
//20
    {ciudad : "Pasto",
    ubicacion : { lat: 1.2136101, lng: -77.2811127},
    vecinos : [{ciudad: 22, distancia: 147}, {ciudad: 9, distancia: 246}]},
//21
    {ciudad : "Cucuta",
    ubicacion : { lat: 7.8939099, lng: -72.5078201},
    vecinos : [{ciudad: 10, distancia: 523}, {ciudad: 26, distancia: 196} , {ciudad: 5, distancia: 407}]},
//22
    {ciudad : "Mocoa",
    ubicacion : { lat: 1.14748 , lng: -76.6473},
    vecinos : [{ciudad: 20, distancia: 147}, {ciudad: 9, distancia: 349}, {ciudad: 7, distancia: 136},
        {ciudad: 0, distancia: 955}]},
//23
    {ciudad : "Armenia",
    ubicacion : { lat: 4.5338898, lng: -75.6811066},
    vecinos : [{ciudad: 24, distancia: 45}, {ciudad: 29, distancia: 179}, {ciudad: 28, distancia: 85}]},
//24
    {ciudad : "Pereira",
    ubicacion : { lat: 4.8133302, lng: -75.6961136},
    vecinos : [{ciudad: 23, distancia: 45}, {ciudad: 29, distancia: 209}, {ciudad: 11, distancia: 213}, {ciudad: 6, distancia: 51}, 
        {ciudad: 28, distancia: 123}, {ciudad: 1, distancia: 213}]},
//25
    {ciudad : "San Andres",
    ubicacion : { lat: 12.5847197, lng: -81.7005615},
    vecinos : []},
//26
    {ciudad : "Bucaramanga",
    ubicacion : { lat: 7.1253901, lng: -73.1197968},
    vecinos : [{ciudad: 21, distancia: 196}, {ciudad: 10, distancia: 449}, {ciudad: 4, distancia: 644}, 
        {ciudad: 1, distancia: 392}, {ciudad: 5, distancia: 283}]},
//27
    {ciudad : "Sincelejo",
    ubicacion : { lat: 9.3047199, lng:	-75.3977814},
    vecinos : [{ciudad: 12, distancia: 118}, {ciudad: 4, distancia: 162}]},
//28
    {ciudad : "Ibague",
    ubicacion : { lat: 4.43889, lng: -75.2322235},
    vecinos : [{ciudad: 23, distancia: 85 }, {ciudad: 24, distancia: 123}, {ciudad: 6, distancia: 176}, 
        {ciudad: 13, distancia: 201}, {ciudad: 16, distancia: 213}, 
        {ciudad: 29, distancia: 265}, {ciudad: 9, distancia: 399} ]},
//29
    {ciudad : "Cali",
    ubicacion : { lat: 3.4372201, lng: -76.5224991},
    vecinos : [{ciudad: 11, distancia: 389}, {ciudad: 24, distancia: 209}, 
        {ciudad: 28, distancia: 265}, {ciudad: 9, distancia: 138}, {ciudad: 23, distancia: 179}]},
//30
    {ciudad : "Mitu",
    ubicacion : { lat: 1.25509, lng: -70.235}, /** */
    vecinos : [{ciudad: 0, distancia: 607}, {ciudad: 7, distancia: 606}, {ciudad: 15, distancia: 305}, {ciudad: 14, distancia: 388}]},
//31
    {ciudad: "Puerto Carreño",
    ubicacion:  {lat: 6.1890300, lng: -67.4858800},
    vecinos: [{ciudad: 14, distancia: 262}, {ciudad: 15, distancia: 1131}, {ciudad: 19, distancia: 853}, {ciudad: 8, distancia: 977}, {ciudad: 2, distancia: 375}]}
];